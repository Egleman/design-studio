<template>
  <header :class="`header ${activeClass}`" ref="headerRef">
    <div class="container">
      <div class="header__wrapper">
        <a href="#" class="header__burger">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6667 12.1667H8.33331M31.6667 20.5H8.33331M31.6667 28.8333H8.33331" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
          </svg>
          Меню
        </a>
        <router-link to="/" class="header__logo">
          <img :src="headerLogo" alt="logo">
        </router-link>
        <a href="tel:79106669977" class="header__phone">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5377 22.3228C22.5973 34.3823 26.1311 31.4965 27.7093 30.369C27.9644 30.2242 33.8058 26.4602 30.1729 22.8282C21.7471 14.4017 23.4568 25.3543 15.4798 17.379C7.50458 9.40191 18.4583 11.1128 10.0324 2.68713C6.39918 -0.946043 2.63484 4.89576 2.49165 5.14921C1.36269 6.72751 -1.52201 10.2633 10.5377 22.3228Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          +7-910-666-99-77
        </a>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import headerLogo from "@/assets/images/icons/header-logo.svg";
import {onMounted, onUnmounted, ref} from "vue";
import { useMinWidthBody } from "@/customHook/useMinWidthBody";

const headerRef = ref<HTMLElement | null>(null);
const { scrollWidth } = useMinWidthBody();
const activeClass = ref('');
const checkPositionScroll = () => {
  if (window.scrollY > 0) {
    activeClass.value = 'active';
  }
  if (window.scrollY === 0) {
    activeClass.value = '';
  }
}
onMounted(() => {
  if (headerRef.value) {
    headerRef.value.style.minWidth = `${320 - scrollWidth}px`;
  }
  window.addEventListener('scroll', checkPositionScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', checkPositionScroll);
})
</script>