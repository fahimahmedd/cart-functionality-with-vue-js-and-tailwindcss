<script setup>
import { useProduct } from "@/stores/useProduct";
import ProductInfo from "./product-info.vue";
import ProductThumbnail from "./product-thumbnail.vue";
import CartModal from "../cart-modal/cart-modal.vue";
import { ref } from "vue";

const productUse = useProduct();
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 items-center px-4 sm:px-8">
    <!-- Product Thumbnail -->
    <ProductThumbnail />

    <!-- Product Info -->
    <ProductInfo />

    <!-- Checkout Sticky Button -->
    <button
      class="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full bg-secondary shadow-md text-sm text-gray-700 font-semibold flex items-center gap-2 cursor-pointer transition-opacity duration-300"
      v-if="productUse.showStickyButton"
      @click="openModal"
    >
      <ion-icon name="cart" class="text-xl"></ion-icon>
      Checkout
      <span
        class="text-xs h-6 w-6 bg-white rounded-md flex items-center justify-center ml-1"
      >
        {{ productUse.checkoutItem }}
      </span>
    </button>

    <!-- Cart Modal -->
    <CartModal :showModal="showModal" @update:showModal="showModal = false" />
  </div>
</template>


<style lang="scss" scoped></style>
