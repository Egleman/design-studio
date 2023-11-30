<template>
  <HeaderApp :sticky="true"/>
  <ReviewsSection/>
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
import ReviewsSection from "@/components/Sections/ReviewsSection/ReviewsSection.vue";
</script>