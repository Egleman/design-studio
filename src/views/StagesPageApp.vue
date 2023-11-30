<template>
  <HeaderApp :sticky="true"/>
  <HowWeBuildSection/>
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
import HowWeBuildSection from "@/components/Sections/HowWeBuildSection/HowWeBuildSection.vue";
</script>