import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProduct = defineStore("useProduct", () => {
  // Quantity Management
  const quantity = ref(1);
  const quantityPlus = () => {
    quantity.value++;
  };
  const quantityMinus = () => {
    if (quantity.value > 1) {
      quantity.value--;
    } else {
      quantity.value = 1;
    }
  };

  // Thumbnail and Color Management
  const selectedColor = ref("purple");
  const colorImages = {
    purple: "/images/product/p-1.png",
    accent: "/images/product/p-2.png",
    blue: "/images/product/p-3.png",
    black: "/images/product/p-4.png",
  };
  const selectedImage = computed(() => colorImages[selectedColor.value]);
  const changeColor = (color) => {
    selectedColor.value = color;
  };

  // Size Management
  const selectedSize = ref({ size: "M", price: 79 });
  const changeSize = (newSize) => {
    selectedSize.value = newSize;
  };

  // Cart Management
  const showStickyButton = ref(false);
  const totalQuantity = ref(0);
  const totalAmount = ref(0);
  const checkoutItem = ref(0);
  const cartList = ref([]);

  const addCart = () => {
    checkoutItem.value++;
    const cartItem = {
      image: selectedImage.value,
      color: selectedColor.value,
      size: selectedSize.value.size,
      qty: quantity.value,
      price: selectedSize.value.price * quantity.value,
    };
    cartList.value.push(cartItem);
    showStickyButton.value = true;
    totalQuantity.value += cartItem.qty;
    totalAmount.value += cartItem.price;
  };
  
  return {
    // Quantity
    quantity,
    quantityPlus,
    quantityMinus,

    // Thumbnail and Color
    selectedColor,
    selectedImage,
    changeColor,

    // Size
    selectedSize,
    changeSize,

    // Cart
    showStickyButton,
    checkoutItem,
    addCart,
    cartList,
    totalQuantity,
    totalAmount,
  };
});
