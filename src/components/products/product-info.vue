<script setup>
import { useProduct } from "@/stores/useProduct";
import Color from "./product-info/color.vue";
import Size from "./product-info/size.vue";
import Quantity from "./product-info/quantity.vue";
const productUse = useProduct();
</script>

<template>
  <div class="product-block">
    <!-- Product Title -->
    <h2 class="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">
      Classy Modern Smart Watch
    </h2>

    <!-- Review Box -->
    <div class="product-review-box flex items-center mt-2">
      <ion-icon name="star" class="text-yellow-500"></ion-icon>
      <ion-icon name="star" class="text-yellow-500"></ion-icon>
      <ion-icon name="star" class="text-yellow-500"></ion-icon>
      <ion-icon name="star-half-outline" class="text-yellow-500"></ion-icon>
      <ion-icon name="star-outline" class="text-gray-400"></ion-icon>
      <span class="text-slate-400 font-light text-sm ml-2">(2 Reviews)</span>
    </div>

    <!-- Pricing Section -->
    <div class="py-4 flex items-center">
      <div class="text-base sm:text-lg text-slate-500 line-through">$99.00</div>
      <div class="text-xl sm:text-2xl ml-3 text-primary font-bold">$79.00</div>
    </div>

    <!-- Product Description -->
    <p class="text-sm sm:text-base font-light text-gray-600">
      I must explain to you how all this mistaken idea of denouncing pleasure
      and praising pain was born and I will give you a complete account of the
      system, and expound the actual teaching.
    </p>

    <!-- Product Details -->
    <div class="product-description flex gap-8 py-4">
      <div>
        <div class="text-sm font-regular text-slate-500">Type</div>
        <h6 class="text-md font-medium text-gray-800 mt-1">Watch</h6>
      </div>
      <div>
        <div class="text-sm font-regular text-slate-500">Model Number</div>
        <h6 class="text-md font-medium text-gray-800 mt-1">Forerunner 290XT</h6>
      </div>
    </div>

    <!-- Color and Size Components -->
    <Color />
    <Size />

    <!-- Quantity and Add to Cart -->
    <div class="flex items-center gap-4 mt-4">
      <Quantity />
      <button
        @click="productUse.addCart"
        class="px-4 sm:px-5 py-2 text-white bg-primary rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Add to Cart
      </button>
      <ion-icon name="heart-outline" class="w-6 h-6 text-primary cursor-pointer"></ion-icon>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
