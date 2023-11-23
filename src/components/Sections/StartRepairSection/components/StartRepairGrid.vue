<template>
  <div class="repair__grid">
    <div class="repair__card" v-for="(card, index) in cards" :key="index">
      <p :class="`repair__card-text ${card.className}`" v-html="card.text"></p>
      <img :src="card.image" alt="image">
    </div>
  </div>
</template>
<script setup lang="ts">
import { TCard } from "@/components/Sections/StartRepairSection/consts/consts";
import { toRefs } from "vue";
const props = defineProps<{
  cards: TCard[],
}>();
const { cards } = toRefs(props);
</script>