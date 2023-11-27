<template>
  <div class="advantages__content">
    <div class="advantages__card black">
      <div class="advantages__card-title">
        Другие
        <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6333 23.5289H5.54297C4.19759 23.5289 3.10693 22.4383 3.10693 21.0929V8.91273C3.10693 7.56731 4.19759 6.4767 5.54297 6.4767H12.851M45.6118 20.6286L40.3337 6.31933C39.5724 4.25553 37.5295 2.95737 35.3388 3.15687C30.5501 3.59269 22.0956 4.37684 15.9254 5.02775C13.4732 5.2867 11.6333 7.36147 11.6333 9.8272V22.1835C11.6333 23.5121 12.1759 24.7832 13.1354 25.7022L25.4032 37.4519C25.5727 37.6143 25.727 37.7921 25.886 37.9646C27.1961 39.3851 29.3469 39.7805 31.1123 38.8869C32.9863 37.9393 33.8857 35.8156 33.2404 33.8606L30.1323 27.3452C29.7467 26.5368 30.3362 25.6027 31.2317 25.6027H41.6269C42.8944 25.6027 44.0902 25.0353 44.8703 24.0634C45.6483 23.0914 45.9238 21.8235 45.6118 20.6286Z" stroke="white" stroke-width="4.5283" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="advantages__card-subtitle" v-if="content.other.title">
        {{ content.other.title }}
      </div>
      <ul class="advantages__card-list">
        <li class="advantages__card-item" v-for="(description, index) in  content.other.descriptions">
          <div class="advantages__card-description">
            <img :src="minus" alt="minus">
            {{ description }}
          </div>
        </li>
      </ul>
      <div class="advantages__card-block">
        {{ content.other.block }}
      </div>
    </div>
    <div class="advantages__card white">
      <div class="advantages__card-title">
        Мы
        <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.773 17.8814H4.44391C3.04577 17.8814 1.91234 19.0148 1.91234 20.413V33.0708C1.91234 34.469 3.04577 35.6024 4.44391 35.6024H12.0386M46.0841 20.8955L40.5989 35.7659C39.8078 37.9107 37.6849 39.2597 35.4082 39.0523C30.4317 38.5994 21.6456 37.7846 15.2335 37.1082C12.6851 36.8391 10.773 34.6829 10.773 32.1205V19.2796C10.773 17.8989 11.3369 16.578 12.3341 15.623L25.083 3.41245C25.2592 3.24368 25.4194 3.05893 25.5847 2.8796C26.9462 1.40342 29.1813 0.992568 31.016 1.92117C32.9634 2.90598 33.8981 5.11294 33.2275 7.1446L29.9975 13.9155C29.5968 14.7556 30.2094 15.7263 31.14 15.7263H41.9429C43.2601 15.7263 44.5028 16.316 45.3135 17.326C46.122 18.3361 46.4083 19.6538 46.0841 20.8955Z" stroke="black" stroke-width="2.82353" stroke-linecap="round"/>
        </svg>
      </div>
      <ul class="advantages__card-list">
        <li class="advantages__card-item" v-for="(description, index) in  content.we.descriptions">
          <div class="advantages__card-description">
            <img :src="plus" alt="plus">
            {{ description }}
          </div>
        </li>
      </ul>
      <div class="advantages__card-block">
        {{ content.we.block }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import minus from "@/assets/images/icons/minus.svg";
import plus from "@/assets/images/icons/plus.svg";
import { toRefs } from "vue";
import { IContent } from "@/components/Sections/AdvantagesSection/interfaces/IContent";
const props = defineProps<{
  content: IContent,
}>();
const { content } = toRefs(props);
</script>