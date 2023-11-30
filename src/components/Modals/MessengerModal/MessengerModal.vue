<template>
  <transition name="fade">
    <div class="modal-chat" v-if="activeModal">
      <div class="modal-chat__header">
        <div class="modal-chat__title">Спросите специалиста</div>
        <a href="#" class="modal-chat__close" @click.prevent="activeModal = false">
          <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 37.64L37 1.64001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1.64001L37 37.64" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <div class="modal-chat__body">
        <MessengerModalStart
            @nextStep="setNextStep"
            v-if="activeComponent === 'start'"
        />
        <MessengerModalForm
            v-if="activeComponent === 'form'"
            @prevStep="setPrevStep"
            @setData="setFormData"
        />
        <MessengerModalSuccess
            v-if="activeComponent === 'success'"
            @prevStep="setPrevStep"
        />
        <MessengerModalError
            v-if="activeComponent === 'error'"
            @prevStep="setPrevStep"
        />
      </div>
    </div>
  </transition>
  <div
      class="messenger-button messenger-button_show"
      :class="{'messenger-opened': activeModal, 'messenger-closed': !activeModal}"
      @click="activeModal = !activeModal"
  >
    <div class="messenger-icon messenger-icon_closed"></div>
    <div class="messenger-icon messenger-icon_opened"></div>
    <div class="unread-indicator unread-indicator_hidden"></div>
  </div>
</template>
<script setup lang="ts">
import helloIcon from '@/assets/images/icons/hello-icon.png';
import MessengerModalForm from "@/components/Modals/MessengerModal/components/MessengerModalForm.vue";
import MessengerModalStart from "@/components/Modals/MessengerModal/components/MessengerModalStart.vue";
import {onMounted, onUpdated, ref} from "vue";
import MessengerModalSuccess from "@/components/Modals/MessengerModal/components/MessengerModalSuccess.vue";
import MessengerModalError from "@/components/Modals/MessengerModal/components/MessengerModalError.vue";

const activeModal = ref(false);
type options = {
  [key: string]: string
}
const messageBody = ref<options>({
  message: '',
  name: '',
  phone: '',
  email: ''
})
const activeComponent = ref('start');
const setNextStep = (res: {component: string, data: string}) => {
  activeComponent.value = res.component;
  messageBody.value.message = res.data;
}
const setPrevStep = (res: {component: string}) => {
  activeComponent.value = res.component;
}
const setFormData = async  (res: {name: string, phone: string, email: string}) => {
  messageBody.value.name = res.name;
  messageBody.value.phone = res.phone;
  messageBody.value.email = res.email;
  try {
    const formData = new FormData();
    for (const key in messageBody.value) {
      formData.append(key, messageBody.value[key]);
    }
    const response = await fetch('/send.php', {
      method: 'POST',
      body: formData
    })
    const json = await response.json();
    if (json.result === "success") {
      activeComponent.value = 'success';
    } else {
      activeComponent.value = 'error';
    }
  } catch (e) {
    console.error(e);
  }
}
</script>