<template>
  <div class="modal-chat__smile">
    <img :src="helloIcon" alt="hello">
    <p>Здравствуйте!<br>Подсказать что-нибудь?</p>
  </div>
  <div class="modal-chat__message">
          <textarea
              name="text-message"
              placeholder="Напишите сообщение..."
              v-model="message"
              @focus="errorMessage = false"
              :class="{error: errorMessage}"
              class="modal-chat__textarea"
              autoheight
              ref="textArea"
          >
          </textarea>
    <button class="modal-chat__button" @click.prevent="nextStep">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" focusable="false">
        <g transform="translate(11 9)" fill="none" fill-rule="evenodd">
          <rect width="2" height="16" x="5" fill="#fff" rx="1"></rect>
          <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 7l6-6 6 6"></path>
        </g>
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts">
import helloIcon from "@/assets/images/icons/hello-icon.png";
import {onMounted, ref} from "vue";
const emit = defineEmits(['nextStep'])
const message = ref('');
const errorMessage = ref(false);
const textArea = ref<HTMLElement | null>(null);
const nextStep = () => {
  if (message.value === '') {
    errorMessage.value = true;
  } else {
    emit('nextStep', {component: 'form', data: message.value})
  }
}
onMounted(() => {
  if (textArea.value) {
    textArea.value.setAttribute('style', 'height: ' + textArea.value.scrollHeight + 'px');
    textArea.value.classList.add('auto');
    textArea.value.addEventListener('input', e => {
      if (textArea.value) {
        textArea.value.style.height = 'auto';
        textArea.value.style.height = (textArea.value.scrollHeight) + 'px';
      }
    });
  }
})
</script>