<template>
  <div class="home">
    <main class="py-12 md:px-20 sm:px-14 px-6">
      <div class="sm:flex items-center shadow-md">
        <div class="md:px-10 sm:px-5">
          <h1 class="text-gray-800 font-bold text-2xl my-2">
            GE62 2QF Apache Pro
          </h1>
          <p class="text-gray-700 mb-2 md:mb-6">
            MSI merupakan salah satu dari sekian banyak produsen notebook/laptop
            gaming yang segera memperbarui lini produk mereka bertepatan dengan
            hadirnya platform Intel Skylake dan salah satu model tersebut adalah
            MSI GE62 6QF Apache Pro.
          </p>
          <div class="flex justify-between mb-2">
            <Checkout class="sm:block hidden mb-2 text-gray-800 font-bold"
              >Buynow</Checkout
            >
          </div>
        </div>
        <div>
          <img
            class="bg-cover"
            src="../assets/msi.jpg"
            alt=""
          />
        </div>
      </div>
    </main>


  </div>
</template>

<script>
import Checkout from "../components/Checkout.vue";

export default {
  name: "Home",
  components: {
    Checkout,
  },
};
</script>
