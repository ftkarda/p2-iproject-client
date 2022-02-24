<template>
  <!-- Navbar goes here -->
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4 px-2">
              <!-- <img src="#" alt="Logo" class="h-8 w-8 mr-2" /> -->
              <span class="font-semibold text-gray-500 text-lg"
                >Toko Hacktiv</span
              >
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <button
              type="button"
              class="
                py-4
                px-2
                text-green-500
                border-b-4 border-green-500
                font-semibold
              "
            >
              <router-link to="/">Home </router-link>
            </button>
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
          <button
            v-if="$store.state.flagLogin === false"
            type="button"
            class="
              py-2
              px-2
              font-medium
              text-gray-500
              rounded
              hover:bg-green-500 hover:text-white
              transition
              duration-300
            "
          >
            <router-link to="/login">Log In </router-link>
          </button>
          <button
            v-if="$store.state.flagLogin === false"
            type="button"
            class="
              py-2
              px-2
              font-medium
              text-white
              bg-green-500
              rounded
              hover:bg-green-400
              transition
              duration-300
            "
          >
            <router-link to="/register">Sign Up </router-link>
          </button>
          <button
            @click="logout"
            v-if="$store.state.flagLogin === true"
            type="button"
            class="
              py-2
              px-2
              font-medium
              text-white
              bg-green-500
              rounded
              hover:bg-green-400
              transition
              duration-300
            "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push({ name: "Home" });
      swal("LOGOUT", "success logout", "success");
    },
  },
};
</script>