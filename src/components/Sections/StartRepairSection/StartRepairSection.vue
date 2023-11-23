<template>
  <section class="repair">
    <div class="container">
      <div class="repair__title">
        Для начала, давайте определимся, где вы
        хотите сделать ремонт?
      </div>
      <StartRepairTabs v-model="activeTab"/>
      <div class="repair__subtitle">
        <div class="line">
          <span></span>
          <span></span>
        </div>
        Мы можем:
        <div class="line">
          <span></span>
          <span></span>
        </div>
      </div>
      <StartRepairGrid :cards="cards"/>
    </div>
  </section>
</template>
<script setup lang="ts">
import StartRepairGrid from "@/components/Sections/StartRepairSection/components/StartRepairGrid.vue";
import {firstCards, secondCards, TCard} from "@/components/Sections/StartRepairSection/consts/consts";
import {computed, ref, watch} from "vue";
import StartRepairTabs from "@/components/Sections/StartRepairSection/components/StartRepairTabs.vue";
const activeTab = ref(0);
const cards = computed<TCard[]>(() => {
  if (activeTab.value === 0) {
    return firstCards.value;
  }
  return secondCards.value;
});

</script>