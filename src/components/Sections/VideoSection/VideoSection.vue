<template>
  <section class="video">
    <div class="container">
      <div class="video__wrapper">
        <p class="video__text">
          3 минуты<br>
          о нас
        </p>
        <a href="#" class="video__block" @click.prevent="modal = true">
          <img :src="playButtonImage" alt="play">
        </a>
      </div>
    </div>
  </section>
  <teleport to="body">
    <transition name="fade">
      <VideoModal v-model="modal" v-if="modal" url="https://www.youtube.com/embed/STVC6gMXyIA?si=hKtxdeT1DW9jO5jl"/>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import playButtonImage from '@/assets/images/icons/play-video-button.svg';
import VideoModal from "@/components/Modals/VideoModal.vue";
import {ref} from "vue";
const modal = ref(false);
</script>