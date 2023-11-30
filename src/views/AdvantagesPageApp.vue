<template>
  <HeaderApp :sticky="true"/>
  <AdvantagesSection/>
  <FlexbilitySection/>
  <MoonSection/>
  <ContactsSection/>
  <FooterApp/>
  <teleport to="body">
    <MessengerModal/>
  </teleport>
</template>
<script setup lang="ts">
import HeaderApp from "@/components/HeaderApp/HeaderApp.vue";
import AdvantagesSection from "@/components/Sections/AdvantagesSection/AdvantagesSection.vue";
import FlexbilitySection from "@/components/Sections/FlexbilitySection/FlexbilitySection.vue";
import MoonSection from "@/components/Sections/MoonSection/MoonSection.vue";
import ContactsSection from "@/components/Sections/ContactsSection/ContactsSection.vue";
import FooterApp from "@/components/FooterApp/FooterApp.vue";
import MessengerModal from "@/components/Modals/MessengerModal/MessengerModal.vue";
</script>