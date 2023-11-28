<template>
  <li class="faq__list-item">
    <div class="faq__list-block">
      <div class="faq__list-header" @click="isExpanded = !isExpanded">
        <div class="faq__list-arrow" :class="{ active: isExpanded }">
          <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.6601 1.08008L13.66 13.08L1.66003 1.08008" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="faq__list-question">
          {{ content.title }}
        </div>
      </div>
      <VueAccordion :expanded="isExpanded">
        <div class="faq__list-hidden" v-html="content.answer"></div>
      </VueAccordion>
    </div>
  </li>
</template>
<script setup lang="ts">
import {VueAccordion} from "@ztrehagem/vue-accordion";
import {ref, toRefs} from "vue";
const props = defineProps<{
  content: {
    title: string,
    answer: string
  },
}>();
const { content } = toRefs(props);
const isExpanded = ref(false);
</script>