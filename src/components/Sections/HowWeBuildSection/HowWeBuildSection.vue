<template>
  <section class="how-we-build" :style="`${calc ? `margin-top: ${height}px` : ''}`">
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
import {ref, toRefs} from "vue";
import HowWeBuildContent from "@/components/Sections/HowWeBuildSection/components/HowWeBuildContent.vue";
import {useCalcHeightBlock} from "@/customHook/useCalcHeightBlock";
interface Props {
  calc?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  calc: false,
})
const { calc } = toRefs(props);
const { contents } = HowWeBuildNamespace;
const activeTab = ref(0);
const { height } = useCalcHeightBlock(document.querySelector('.header'));
</script>