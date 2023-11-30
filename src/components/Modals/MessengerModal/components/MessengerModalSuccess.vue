<template>
  <div class="modal-chat__success">
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66669 35C1.66669 19.2865 1.66669 11.4298 6.54825 6.54825C11.4298 1.66669 19.2865 1.66669 35 1.66669C50.7134 1.66669 58.5704 1.66669 63.4517 6.54825C68.3334 11.4298 68.3334 19.2865 68.3334 35C68.3334 50.7134 68.3334 58.5704 63.4517 63.4517C58.5704 68.3334 50.7134 68.3334 35 68.3334C19.2865 68.3334 11.4298 68.3334 6.54825 63.4517C1.66669 58.5704 1.66669 50.7134 1.66669 35Z" stroke="#FFDD2D" stroke-width="2"/>
      <path d="M23.3333 36.6667L30 43.3334L46.6666 26.6667" stroke="#FFDD2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p>Спасибо!<br>Мы скоро с вами свяжемся!</p>
    <div class="modal-chat__new-send">
      <button type="submit" @click="newQuestion">Задать ещё вопрос</button>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['prevStep']);
const newQuestion = () => {
  emit('prevStep', {component: 'start'})
}
</script>