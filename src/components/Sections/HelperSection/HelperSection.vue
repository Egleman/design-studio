<template>
  <section class="helper">
    <div class="container">
      <div class="helper__title">
        Мы знаем все тонкости строительства и ремонта, поэтому поможем вам, если вы строите:
      </div>
      <HelperTabs v-model="activeTab" modificator="helper__tabs_mobile"/>
    </div>
    <div class="helper__image" :style="`background: url(${tabsImage[activeTab]}) center/cover no-repeat`">
      <div class="container">
        <div class="helper__image-wrapper">
          <HelperTabs v-model="activeTab"/>
          <HelperTextContent :content="tabsContent[activeTab]"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import HelperTabs from "@/components/Sections/HelperSection/components/HelperTabs.vue";
import HelperTextContent from "@/components/Sections/HelperSection/components/HelperTextContent.vue";
import {ref} from "vue";
import { HelperSectionNamespace } from "@/components/Sections/HelperSection/consts/consts";
const { tabsContent, tabsImage } = HelperSectionNamespace;
const activeTab = ref(0);
</script>