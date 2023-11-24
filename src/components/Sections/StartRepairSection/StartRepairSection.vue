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
      <StartRepairGrid :cards="cards[activeTab]"/>
      <div class="repair__bottom">
        <div>
          Вам останется только согласовывать и
          наблюдать за нашей работой!
        </div>
        <p>
          Действительно без суеты!
        </p>
        <span>
          А еще МЫ поможем
          вам даже с переездом!
        </span>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import StartRepairGrid from "@/components/Sections/StartRepairSection/components/StartRepairGrid.vue";
import StartRepairTabs from "@/components/Sections/StartRepairSection/components/StartRepairTabs.vue";
import { firstCards, secondCards } from "@/components/Sections/StartRepairSection/consts/consts";
import { ref } from "vue";
const activeTab = ref(0);
const cards = {
  0: firstCards,
  1: secondCards
}
</script>