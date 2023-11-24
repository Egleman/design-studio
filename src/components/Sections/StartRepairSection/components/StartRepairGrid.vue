<template>
  <div class="repair__grid">
    <div :class="`repair__card repair__card_${index + 1}`" v-for="(card, index) in cards" :key="index">
      <p :class="`repair__card-text ${card.className}`" v-html="card.text"></p>
      <div class="repair__card-image">
        <img :src="card.image" alt="image">
      </div>
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