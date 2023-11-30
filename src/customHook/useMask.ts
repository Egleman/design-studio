import Inputmask from "inputmask";
import { ref } from 'vue';
export function useMask(element: HTMLElement) {
    const input = ref(element);
    const im = new Inputmask<any>({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        jitMasking: true,
        inputmode: 'tel'
    })
    im.mask(element);
}