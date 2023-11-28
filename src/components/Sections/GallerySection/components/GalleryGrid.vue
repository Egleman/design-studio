<template>
  <div class="gallery__images">
    <div class="gallery__grid v-1">
      <div class="gallery__card small">
        <img :src="images[0]" alt="image">
      </div>
      <div class="gallery__card small">
        <img :src="images[1]" alt="image">
      </div>
      <div class="gallery__card medium">
        <img :src="images[2]" alt="image">
      </div>
    </div>
    <div class="gallery__grid v-2">
      <div class="gallery__card high">
        <img :src="images[3]" alt="image">
      </div>
    </div>
    <div class="gallery__grid v-3">
      <div class="gallery__card medium">
        <img :src="images[4]" alt="image">
      </div>
      <div class="gallery__card small">
        <img :src="images[5]" alt="image">
      </div>
      <div class="gallery__card small">
        <img :src="images[6]" alt="image">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps<{
  images: any[]
}>();
const { images } = toRefs(props);
</script>