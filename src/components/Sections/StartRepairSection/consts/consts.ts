import image1 from "@/assets/images/repair-images/1.jpeg"
import image2 from "@/assets/images/repair-images/2.jpeg";
import image3 from "@/assets/images/repair-images/3.jpeg";
import image4 from "@/assets/images/repair-images/4.jpeg";
import image5 from "@/assets/images/repair-images/5.jpeg";

import image6 from "@/assets/images/repair-images/6.jpeg"
import image7 from "@/assets/images/repair-images/7.jpeg";
import image8 from "@/assets/images/repair-images/8.jpeg";
import image9 from "@/assets/images/repair-images/9.jpeg";
import image10 from "@/assets/images/repair-images/10.jpeg";
import {ref} from "vue";

export type TCard = {
    text: string,
    className: string,
    image: any
}
export const firstCards: TCard[] = [
    {
        text: 'Разработать <span>проект дома,</span> а также <span>дизайн помещений</span> в нем.',
        className: 'black',
        image: image1
    },
    {
        text: '<span>Cогласовать и подвести</span> коммуникации.',
        className: 'black',
        image: image2
    },
    {
        text: 'Подобрать, закупить и доставить для вас <span>по самым выгодным ценам</span> строительные и отделочные материалы.',
        className: 'white',
        image: image3
    },
    {
        text: 'Построить дом и выполнить в нем все виды работ: <span>от черновых до отделки, от канализации и водопровода до электрики.</span>',
        className: 'white',
        image: image4
    },
    {
        text: '<span>Подключить и запустить</span> все коммуникации, <span>согласовать</span> все с управляющей компанией.',
        className: 'white',
        image: image5
    }
]

export const secondCards: TCard[] = [
    {
        text: 'Провести замеры и разработать дизайн квартиры и все необходимые чертежи.',
        className: 'black',
        image: image6
    },
    {
        text: 'Подобрать, закупить по самым выгодным ценам и доставить вам отделочные материалы.',
        className: 'black',
        image: image7
    },
    {
        text: 'Помочь согласовать все работы с коммунальными службами.',
        className: 'black',
        image: image8
    },
    {
        text: 'Выполнить все виды работ: от черновых до отделочных, от отопления и водоснабжения до электрики.',
        className: 'black',
        image: image9
    },
    {
        text: 'Подключить и запустить все коммуникации, согласовать все с управляющей компанией.',
        className: 'black',
        image: image10
    }
]