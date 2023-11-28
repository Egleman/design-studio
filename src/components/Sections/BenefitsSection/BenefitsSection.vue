<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits__wrapper">
        <div class="benefits__wrapper-left">
          <img :src="benefitsImage" alt="benefits">
        </div>
        <div class="benefits__wrapper-right">
          <ul class="benefits__list">
            <li class="benefits__list-item">
              <div class="benefits__list-block">
                <p class="benefits__list-title">
                  Что дизайн-проект дает вам?
                </p>
                <span class="benefits__list-text">
                   Еще не вложив в ремонт ни копейки вы увидите,
                  как будет выглядеть ваш будущий дом, в какую
                  сумму вам обойдется ремонт, где и какие материалы
                  нужно покупать.
                </span>
                <svg width="50" height="11" viewBox="0 0 50 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.799805" width="50" height="10" fill="black"/>
                </svg>
              </div>
            </li>
            <li class="benefits__list-item">
              <div class="benefits__list-block">
                <p class="benefits__list-title">
                  Что дизайн проект дает нам?
                </p>
                <span class="benefits__list-text">
                  Возможность продемонстрировать вам наш уровень
                  профессионализма и заслужить ваше доверие!
                </span>
                <svg width="50" height="11" viewBox="0 0 50 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.799805" width="50" height="10" fill="black"/>
                </svg>
              </div>
            </li>
            <li class="benefits__list-item">
              <div class="benefits__list-block">
                <p class="benefits__list-title">Ничего не теряете!</p>
                <span class="benefits__list-text">
                   Если вы согласитесь работать с нами по проекту дальше,
                  то мы сделаем скидку со стоимость ремонта на стоимость
                  дизайн проекта!
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="benefits__footer">
        То есть вы ничего не теряете!
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import benefitsImage from '@/assets/images/bemefits-images/benefits.png';
</script>