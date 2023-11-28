<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__wrapper">
        <div class="reviews__header">
          <div class="reviews__title">
            Отзывы
          </div>
          <div class="reviews__buttons">
            <button class="reviews__button prev" ref="prevBtn">
              <svg width="51" height="34" viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.66 17.0302H1.65997M1.65997 17.0302L17.66 1.03027M1.65997 17.0302L17.66 33.0302" stroke="black" stroke-width="1.71429" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="reviews__button next" ref="nextBtn">
              <svg width="51" height="34" viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.65997 17.0302H49.66M49.66 17.0302L33.6599 1.03027M49.66 17.0302L33.6599 33.0302" stroke="black" stroke-width="1.71429" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <div class="reviews__like">
            <svg width="108" height="92" viewBox="0 0 108 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5683 40.6541H9.20186C6.02825 40.6541 3.45549 43.2267 3.45549 46.4005V75.1322C3.45549 78.306 6.02825 80.8786 9.20186 80.8786H26.4408M103.72 47.4958L91.2697 81.2499C89.4738 86.1182 84.655 89.1803 79.4874 88.7096C68.1912 87.6816 48.2478 85.832 33.6929 84.2966C27.9085 83.6858 23.5683 78.7916 23.5683 72.9751V43.8278C23.5683 40.6938 24.8482 37.6954 27.1117 35.5276L56.0502 7.81113C56.4501 7.42806 56.814 7.00869 57.1891 6.60163C60.2796 3.25087 65.353 2.31828 69.5174 4.4261C73.938 6.66151 76.0596 11.6711 74.5374 16.2827L67.2057 31.6519C66.296 33.5588 67.6866 35.7622 69.799 35.7622H94.3204C97.3102 35.7622 100.131 37.1007 101.971 39.3934C103.806 41.6861 104.456 44.6771 103.72 47.4958Z" stroke="black" stroke-opacity="0.2" stroke-width="6.40909" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div class="reviews__slider">
          <div class="swiper" ref="slider">
            <div class="swiper-wrapper">
              <ReviewsSlide
                  v-for="(content, index) in contents"
                  :key="index"
                  :content="content"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import 'swiper/css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import {onMounted, ref} from "vue";
import ReviewsSlide from "@/components/Sections/ReviewsSection/components/ReviewsSlide.vue";
import {ReviewsNamespace} from "@/components/Sections/ReviewsSection/consts/consts";
const { contents } = ReviewsNamespace;
const slider = ref<HTMLElement | null>(null);
const nextBtn = ref<HTMLElement | null>(null);
const prevBtn = ref<HTMLElement | null>(null);

onMounted(() => {
  if (slider.value && nextBtn.value && prevBtn.value) {
    const swiper = new Swiper(slider.value, {
      modules: [Navigation],
      loop: true,
      allowTouchMove: true,
      autoHeight: true,
      navigation: {
        nextEl: nextBtn.value,
        prevEl: prevBtn.value,
      },
      breakpoints: {
        0: {
          autoHeight: true
        },
        1022: {
          autoHeight: false
        }
      }
    });
  }
})
</script>