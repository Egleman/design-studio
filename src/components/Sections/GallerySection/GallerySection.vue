<template>
  <section class="gallery" :style="`${calc ? `margin-top: ${height}px` : ''}`">
    <div class="container">
      <div class="gallery__wrapper">
        <p class="gallery__suptitle">
          БОЛЕЕ 100 ВЫПОЛНЕННЫХ ОБЪЕКТОВ
        </p>
        <div class="gallery__title">
          Примеры визуализаций
        </div>
        <GalleryGrid :images="images1"/>
        <GalleryGrid :images="images2" v-show="show"/>
        <div class="gallery__divider" @click="showMore">
          <div class="line">
            <span></span>
            <span></span>
          </div>
          {{ textButton }}
          <div class="line">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import GalleryGrid from "@/components/Sections/GallerySection/components/GalleryGrid.vue";
import {GalleryNamespace} from "@/components/Sections/GallerySection/consts/consts";
import {ref, toRefs} from "vue";
import {useCalcHeightBlock} from "@/customHook/useCalcHeightBlock";
interface Props {
  calc?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  calc: false,
})
const { calc } = toRefs(props);

const { images1, images2 } = GalleryNamespace;
const textButton = ref('Показать ещё');
const show = ref(false);
const showMore = () => {
  if (textButton.value === 'Показать ещё') {
    show.value = true;
    textButton.value = 'Хотите посмотреть другие работы? Напишите мне в WhatsApp';
  }
}
const { height } = useCalcHeightBlock(document.querySelector('.header'));
</script>