<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  name: "Checkout",
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      "pk_test_51KT7GhBvjuqzcs60qs82KXQsnAPfhFScKGC3d3ZOz92386bycO4PnvAsgYnL8acNlI3vnkXsGsISKMOKbpxjXufB00rh9hhUtD";
    return {
      loading: false,
      lineItems: [
        {
          price: "price_1KVu1pBvjuqzcs60olh32XNg", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "http://localhost:8080/success",
      cancelURL: "http://localhost:8080/",
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
