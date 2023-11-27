<template>
  <ul class="how-we-build__tabs">
    <li
        class="how-we-build__tabs-item"
        v-for="(tab, index) in tabs"
    >
      <a
          href="#"
          class="how-we-build__tabs-link"
          :class="modelValue === index ? 'active' : ''"
          @click.prevent="emit('update:modelValue', index)"
      >
        {{ tab }}
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import {HowWeBuildNamespace} from "@/components/Sections/HowWeBuildSection/consts/consts";
import {toRefs} from "vue";
const { tabs } = HowWeBuildNamespace;
const props = defineProps<{
  modelValue: number,
}>();
const { modelValue } = toRefs(props);
const emit = defineEmits(['update:modelValue'])
</script>