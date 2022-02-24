import Vue from "vue";
import Vuex from "vuex";
import customersAPI from "../apis/customerApi";
import swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flagLogin: false,
    flagRegister: false,
  },
  mutations: {
    SET_FLAGLOGIN(state, payload) {
      state.flagLogin = payload;
    },
    SET_REGISTER(state, payload) {
      state.flagRegister = payload;
    },
  },
  actions: {
    async checkLogin(context) {
      try {
        if (localStorage.getItem("access_token")) {
          context.commit("SET_FLAGLOGIN", true);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async login(context, payload) {
      try {
        const response = await customersAPI.post("login", payload);
        if (response.status === 200) {
          context.commit("SET_FLAGLOGIN", true);
        }
        localStorage.setItem("access_token", response.data.access_token);
        swal("LOGIN", "Success Login", "success");
      } catch (error) {
        console.log(error);
      }
    },

    async register(context, payload) {
      try {
        const response = await customersAPI.post(
          "register",
          payload
        );
        swal("Register", "Success Register", "success");
        if (response.status === 201) {
          context.commit("SET_REGISTER", true);
        }
      } catch (error) {
        swal("Please fill form");
      }
    },
  },
  modules: {},
});
