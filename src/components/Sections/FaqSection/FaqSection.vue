<template>
  <section class="faq" :style="`${calc ? `margin-top: ${height}px` : ''}`">
    <div class="container">
      <div class="faq__wrapper">
        <div class="faq__title">
          Часто<br> задаваемые<br> вопросы
        </div>
        <ul class="faq__list">
          <FaqQuestions
              v-for="(question, index) in questions"
              :content="question"
              :key="index"
          />
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import FaqQuestions from "@/components/Sections/FaqSection/components/FaqQuestions.vue";
import {FaqNamespace} from "@/components/Sections/FaqSection/consts/consts";
import {toRefs} from "vue";
import {useCalcHeightBlock} from "@/customHook/useCalcHeightBlock";
const { questions } = FaqNamespace;

interface Props {
  calc?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  calc: false,
})
const { calc } = toRefs(props);
const { height } = useCalcHeightBlock(document.querySelector('.header'));
</script>