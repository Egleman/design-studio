<template>
  <div class="overlay" @click.self="emit('update:modelValue', false)">
    <div class="modal-dialog">
      <a href="#" class="modal-dialog__close" @click.prevent="emit('update:modelValue', false)">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75977 28.9952L29.2398 4.51526" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.75977 4.51526L29.2398 28.9952" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <div class="modal-dialog__video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/STVC6gMXyIA?si=hKtxdeT1DW9jO5jl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
</script>