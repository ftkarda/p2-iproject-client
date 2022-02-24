<template>
  <div
    class="
      h-screen
      bg-gradient-to-br
      from-blue-600
      to-indigo-600
      flex
      justify-center
      items-center
      w-full
    "
  >
    <form @click.prevent="formLogin">
      <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <div class="space-y-4">
          <h1 class="text-center text-2xl font-semibold text-gray-600">
            Login
          </h1>

          <div>
            <label for="email" class="block mb-1 text-gray-600 font-semibold"
              >Email</label
            >
            <input
            v-model="email"
              type="email"
              class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
          </div>
          <div>
            <label for="password" class="block mb-1 text-gray-600 font-semibold"
              >Password</label
            >
            <input
            v-model="password"
              type="password"
              class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
          </div>
        </div>
        <button
          class="
            mt-4
            w-full
            bg-gradient-to-tr
            from-blue-600
            to-indigo-600
            text-indigo-100
            py-2
            rounded-md
            text-lg
            tracking-wide
          "
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
     data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    flagLogin() {
      return this.$store.state.flagLogin;
    },
  },
  methods: {
    async formLogin() {
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });

      if (this.flagLogin) {
        this.$router.push({ name: "Home" });
      } else {
        console.log("tidak jalan");
      }
    },
  },
};
</script>

<style>
</style>