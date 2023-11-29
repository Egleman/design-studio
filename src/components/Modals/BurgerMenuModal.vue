<template>
<div class="offcanvas">
  <div class="container">
    <div class="offcanvas__wrapper">
      <div class="offcanvas__header">
        <a href="#" class="offcanvas__close" @click.prevent="emit('update:modelValue', false)">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M25 48.7573C38.1208 48.7573 48.7573 38.1208 48.7573 25C48.7573 11.8792 38.1208 1.24269 25 1.24269C11.8792 1.24269 1.24268 11.8792 1.24268 25C1.24268 38.1208 11.8792 48.7573 25 48.7573Z" stroke="white" stroke-width="2"/>
            <path d="M30.9392 19.0607L19.0606 30.9393M19.0605 19.0607L30.9392 30.9393" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
        <div class="offcanvas__contacts">
          <a href="tel:79106669977" class="offcanvas__phone">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5377 22.3228C22.5973 34.3823 26.1311 31.4965 27.7093 30.369C27.9644 30.2242 33.8058 26.4602 30.1729 22.8282C21.7471 14.4017 23.4568 25.3543 15.4798 17.379C7.50458 9.40191 18.4583 11.1128 10.0324 2.68713C6.39918 -0.946043 2.63484 4.89576 2.49165 5.14921C1.36269 6.72751 -1.52201 10.2633 10.5377 22.3228Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            +7-910-666-99-77
          </a>
          <div class="offcanvas__address">
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21.9388C19.1482 21.9388 21.7 19.3348 21.7 16.1224C21.7 12.9102 19.1482 10.3061 16 10.3061C12.8519 10.3061 10.3 12.9102 10.3 16.1224C10.3 19.3348 12.8519 21.9388 16 21.9388Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 39.3878C23.6 31.6327 31.2 24.6885 31.2 16.1224C31.2 7.55639 24.3948 0.612244 16 0.612244C7.60532 0.612244 0.800049 7.55639 0.800049 16.1224C0.800049 24.6885 8.40005 31.6327 16 39.3878Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>
              Московская обл., г. Домодедово,<br> д. Юсупово, ул. Сиреневая аллея 1Ак1
            </p>
          </div>
        </div>
      </div>
      <ul class="offcanvas__list">
        <li class="offcanvas__list-item">
          <a href="#" class="offcanvas__list-link">3 минуты о нас (видео)</a>
        </li>
        <li class="offcanvas__list-item">
          <a href="#" class="offcanvas__list-link">Что мы можем?</a>
        </li>
        <li class="offcanvas__list-item">
          <a href="#" class="offcanvas__list-link">Для кого?</a>
        </li>
        <li class="offcanvas__list-item">
          <a href="#" class="offcanvas__list-link">Чем мы лучше других</a>
        </li>
        <li class="offcanvas__list-item">
          <a href="#" class="offcanvas__list-link">Преимущества</a>
        </li>
        <li class="offcanvas__list-item">
          <a href="#" class="offcanvas__list-link">Контакты</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
</script>