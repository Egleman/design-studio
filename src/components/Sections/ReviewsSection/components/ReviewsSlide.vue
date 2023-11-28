<template>
  <div class="swiper-slide">
    <div class="reviews__slide">
      <div class="reviews__slide-image" @click="modal = true">
        <img :src="playerButton" alt="play" class="reviews__slide-play">
        <img :src="content.image" alt="human" class="reviews__slide-base">
      </div>
      <div class="reviews__slide-body">
        <div class="reviews__slide-title">{{ content.title }}</div>
        <p class="reviews__slide-description" v-for="(description, index) in content.description">
          {{ description }}
        </p>
        <ul class="reviews__slide-list">
          <li class="reviews__slide-item" v-for="(advantage, index) in content.advantages" :key="`advantage-${index}`">
            <div class="reviews__slide-advantage">
              <p>{{ advantage.title }}</p>
              <span>{{ advantage.text }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <teleport to="body">
    <transition name="fade">
      <VideoModal :url="content.video" v-model="modal" v-if="modal"/>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import {ref, toRefs} from "vue";
import playerButton from "@/assets/images/icons/player.svg"
import VideoModal from "@/components/Modals/VideoModal.vue";
const props = defineProps<{
  content: {
    image: any,
    title: string,
    description: string[],
    advantages: {
      title: string,
      text: string
    }[],
    video: string
  }
}>();
const { content } = toRefs(props);
const modal = ref(false);
</script>