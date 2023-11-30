<template>
  <div class="modal-chat__form">
    <form action="#" @submit.prevent="sendData">
      <button class="modal-chat__back" @click.prevent="prevStep">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" focusable="false">
          <g transform="translate(11 9)" fill="none" fill-rule="evenodd">
            <rect width="2" height="16" x="5" fill="#000" rx="1"></rect>
            <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 7l6-6 6 6"></path>
          </g>
        </svg>
      </button>
      <input
          :style="`${bodyError.name ? 'border-bottom: 2px solid red;' : 'border-bottom: 2px solid #ffdd2d;'}`"
          type="text"
          placeholder="Ваше имя*"
          v-model="body.name"
          @focus="bodyError.name = false"
      >
      <input
          :style="`${bodyError.phone ? 'border-bottom: 2px solid red;' : 'border-bottom: 2px solid #ffdd2d;'}`"
          type="text"
          placeholder="Ваш телефон*"
          v-model="body.phone"
          ref="maskedInput"
          @focus="bodyError.phone = false"
      >
      <p class="error-message"></p>
      <input
          :style="`${bodyError.email ? 'border-bottom: 2px solid red;' : 'border-bottom: 2px solid #ffdd2d;'}`"
          type="text"
          placeholder="Ваш email"
          v-model="body.email"
          @focus="bodyError.email = false"
      >
      <div class="modal-chat__send">
        <button type="submit">Задать вопрос</button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import {onMounted, onUpdated, ref} from "vue";
import {useMask} from "@/customHook/useMask";
const maskedInput = ref<HTMLElement | null>(null);
const emit = defineEmits(['prevStep', 'setData']);
type errorOptions = {
  [key: string]: boolean
}
type options = {
  [key: string]: string
}
const body = ref<options>({
  name: '',
  phone: '',
  email: ''
})

const bodyError = ref<errorOptions>({
  name: false,
  phone: false,
  email: false
})
const prevStep = () => {
  emit('prevStep', {component: 'start'})
}
const sendData = () => {
  const arr: number[] = [];
  for (const key in body.value) {
    if (body.value[key] === '') {
      bodyError.value[key] = true;
      arr.push(1);
    } else {
      arr.push(0);
    }
  }
  const errorValidate = arr.every(num => num === 0);
  if (errorValidate) {
    emit('setData', body.value);
  }
}
onMounted(() => {
  if (maskedInput.value) {
    useMask(maskedInput.value)
  }
})
</script>