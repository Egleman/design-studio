<template>
  <ul class="repair__tabs">
    <li class="repair__tabs-item"><a href="#" @click.prevent="setTab(0)" :class="`repair__tabs-link ${activeTab === 0 ? 'active' : ''}`">В готовом доме</a></li>
    <li class="repair__tabs-item"><a href="#" @click.prevent="setTab(1)" :class="`repair__tabs-link ${activeTab === 1 ? 'active' : ''}`">В квартире</a></li>
  </ul>
</template>
<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(['update:modelValue']);
const activeTab = ref(0);
const setTab = (tab: number) => {
  activeTab.value = tab;
  emit('update:modelValue', activeTab.value);
}
</script>