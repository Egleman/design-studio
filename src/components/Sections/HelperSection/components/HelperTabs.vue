<template>
  <ul class="helper__tabs" :class="modificator ? modificator : ''">
    <li class="helper__tabs-item" v-for="(tab, index) in tabs">
      <a href="#" :class="`helper__tabs-link ${modelValue === index ? 'active' : ''}`" @click.prevent="setActiveTab(index)">
        {{ tab }}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.923065 23.0769L23.0769 0.923096M23.0769 0.923096H8.30768M23.0769 0.923096V15.6924" stroke="black" stroke-width="1.38462" stroke-linecap="round"/>
        </svg>
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { HelperSectionNamespace } from "@/components/Sections/HelperSection/consts/consts";
const { tabs } = HelperSectionNamespace;
import { toRefs } from "vue";

const props = defineProps<{
  modelValue: number,
  modificator?: string
}>();
const { modelValue, modificator } = toRefs(props);
const emit = defineEmits(['update:modelValue'])
const setActiveTab = (index: number) => {
  emit('update:modelValue', index);
}
</script>