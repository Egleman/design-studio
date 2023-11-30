import {ref} from "vue";
export const useCalcHeightBlock = (element: HTMLElement | null) => {
    const height = ref<number>(0);
    if (element) {
        new ResizeObserver(() => {
            height.value = element.offsetHeight
        }).observe(element);
    }
    return {
        height
    }
}