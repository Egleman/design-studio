<template>
  <div class="how-we-build__content">
    <p class="how-we-build__content-text before">До</p>
    <p class="how-we-build__content-text affter">После</p>
    <ImgComparisonSlider>
      <img
          slot="first"
          class="how-we-build__image"
          :src="content.first"
      />
      <img
          slot="second"
          class="how-we-build__image"
          :src="content.second"
      />
    </ImgComparisonSlider>
  </div>
</template>
<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import {toRefs} from "vue";
const props = defineProps<{
  content: {
    first: any,
    second: any
  },
}>();
const { content } = toRefs(props);
</script>