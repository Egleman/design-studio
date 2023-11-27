<template>
  <section class="advantages">
    <img :src="rules" alt="рулетка" class="advantages__rules">
    <div class="container">
      <div class="advantages__wrapper">
        <div class="advantages__title">Чем мы лучше?</div>
        <AdvantagesTabs v-model="activeTab"/>
        <AdvantagesContent :content="contents[activeTab]"/>
        <div class="advantages__footer">
          <span> А главное — мы экономим ваше время и нервы,</span> ведь
          общение со всеми коммунальными службами и
          надзорными органами мы возьмем на себя!
        </div>
        <img :src="mapImage" alt="Чертёж" class="advantages__map">
        <img :src="circleImage" alt="Шар" class="advantages__circle">
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import AdvantagesTabs from "@/components/Sections/AdvantagesSection/components/AdvantagesTabs.vue";
import { ref } from "vue";
import AdvantagesContent from "@/components/Sections/AdvantagesSection/components/AdvantagesContent.vue";
import { AdvantagesNamespace } from "@/components/Sections/AdvantagesSection/consts/consts";
import rules from '@/assets/images/advantages-images/rules.png';
import mapImage from '@/assets/images/advantages-images/map.png';
import circleImage from '@/assets/images/advantages-images/circle.png';
const { contents } = AdvantagesNamespace;
const activeTab = ref(0);
</script>