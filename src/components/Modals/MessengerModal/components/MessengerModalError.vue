<template>
  <div class="modal-chat__error">
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66663 35C1.66663 19.2865 1.66663 11.4297 6.54819 6.54819C11.4297 1.66663 19.2865 1.66663 35 1.66663C50.7133 1.66663 58.5703 1.66663 63.4516 6.54819C68.3333 11.4297 68.3333 19.2865 68.3333 35C68.3333 50.7133 68.3333 58.5703 63.4516 63.4516C58.5703 68.3333 50.7133 68.3333 35 68.3333C19.2865 68.3333 11.4297 68.3333 6.54819 63.4516C1.66663 58.5703 1.66663 50.7133 1.66663 35Z" stroke="#FF0000" stroke-width="2"/>
      <path d="M43.3334 26.6667L26.6667 43.3333M26.6666 26.6666L43.3334 43.3333" stroke="#FF0000" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <p>Что-то пошло не так!</p>
    <div class="modal-chat__new-send-2">
      <button type="submit" @click="newQuestion">Попробовать ещё раз</button>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['prevStep']);
const newQuestion = () => {
  emit('prevStep', {component: 'start'})
}
</script>