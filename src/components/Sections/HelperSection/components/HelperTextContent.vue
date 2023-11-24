<template>
  <div class="helper__text">
    <div class="helper__text-title">{{ content.title }}</div>
    <p class="helper__text-description" v-for="(text, index) in content.description" :key="index">
      {{ text }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  content: {
    title: string,
    description: string[]
  }
}>();
const { content } = toRefs(props);
</script>