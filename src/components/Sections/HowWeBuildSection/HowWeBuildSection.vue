<template>
  <section class="how-we-build">
    <div class="container">
      <div class="how-we-build__title">Как мы строим?</div>
      <HowWeBuildTabs v-model="activeTab"/>
      <HowWeBuildContent :content="contents[activeTab]"/>
    </div>
  </section>
</template>
<script setup lang="ts">
import HowWeBuildTabs from "@/components/Sections/HowWeBuildSection/components/HowWeBuildTabs.vue";
import { HowWeBuildNamespace } from "@/components/Sections/HowWeBuildSection/consts/consts";
import { ref } from "vue";
import HowWeBuildContent from "@/components/Sections/HowWeBuildSection/components/HowWeBuildContent.vue";
const { contents } = HowWeBuildNamespace;
const activeTab = ref(0);
</script>