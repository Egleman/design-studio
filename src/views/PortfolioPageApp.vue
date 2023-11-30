<template>
  <HeaderApp/>
  <GallerySection :calc="true"/>
  <ContactsSection/>
  <FooterApp/>
  <teleport to="body">
    <MessengerModal/>
  </teleport>
</template>
<script setup lang="ts">
import HeaderApp from "@/components/HeaderApp/HeaderApp.vue";
import ContactsSection from "@/components/Sections/ContactsSection/ContactsSection.vue";
import FooterApp from "@/components/FooterApp/FooterApp.vue";
import MessengerModal from "@/components/Modals/MessengerModal/MessengerModal.vue";
import GallerySection from "@/components/Sections/GallerySection/GallerySection.vue";
import {toRefs} from "vue";
import {useCalcHeightBlock} from "@/customHook/useCalcHeightBlock";
interface Props {
  calc?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  calc: false,
})
const { calc } = toRefs(props);
const { height } = useCalcHeightBlock(document.querySelector('.header'));
</script>