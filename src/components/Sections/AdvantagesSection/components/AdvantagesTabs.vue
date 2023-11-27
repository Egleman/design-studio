<template>
  <ul class="advantages__tabs">
    <li
        class="advantages__tabs-item"
        v-for="(tab, index) in tabs"
    >
      <a
          href="#"
          class="advantages__tabs-link"
          :class="modelValue === index ? 'active' : ''"
          @click.prevent="emit('update:modelValue', index)"
      >
        {{ tab }}
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { AdvantagesNamespace } from "@/components/Sections/AdvantagesSection/consts/consts";
import { toRefs } from "vue";
const props = defineProps<{
  modelValue: number,
}>();
const { modelValue } = toRefs(props);
const { tabs } = AdvantagesNamespace;
const emit = defineEmits(['update:modelValue'])
</script>