import "../../index.css";
import Render from "../store/Render";

import { Menu, toggleMenu } from "../compoments/header";
import Footer from "../compoments/Footer";

// Render menu
Render("menu", Menu);
toggleMenu();

// Render WorkDetail
const workDetails = [
    { 
        id: 1,
        title: "Designing Dashboards with usability in mind",
        year: 2020,
        description: "Dashboard, User Experience Design",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img1: 'img/Rectangle 30.jpg',
        img2: 'img//Rectangle 5.png',
        img3: 'img//Rectangle 6.png',
    },
    { 
        id: 2,
        title: "Vibrant Portraits of 2020",
        year: 2019,
        description: "Dashboard, User Experience Design",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img1: 'img/Rectangle 32.jpg',
        img2: 'img//Rectangle 5.png',
        img3: 'img//Rectangle 6.png',
    },
    { 
        id: 3,
        title: "36 Days of Malayalam type",
        year: 2018,
        description: "Dashboard, User Experience Design",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img1: 'img/Rectangle 34.jpg',
        img2: 'img//Rectangle 5.png',
        img3: 'img//Rectangle 6.png',
    },
    
]

const idURL = new URLSearchParams(location.search).get( "id")
const workDetail = workDetails.find((workDetail) => workDetail.id == idURL) 

const htmlsWorkDetail = `
    <div class="">
        <h2 class="md:max-w-[506px] text-3xl md:leading-[50px] md:text-[36px] text-dark font-bold">
            ${workDetail.title}
        </h2>
        <div class="my-5 flex space-x-8">
            <span
                class="flex items-center justify-center  w-[62px] h-[25px] bg-[#FF7C7C] text-lg text-white rounded-2xl"
            >${workDetail.year}</span>
            <span class="text-xl text-light">${workDetail.description}</span>
        </div>

        <p class="md:max-w-[620px] text-base leading-6 ">${workDetail.content}</p>

        <img src="${workDetail.img1}" alt="" class="w-full my-6 md:my-11">

        <h3 class="text-[26px] text-dark font-semibold">Heading 1</h3>
        <h2 class="mt-2 text-2xl text-dark font-semibold">Heading 2</h2>

        <p class="md:max-w-[620px] text-base leading-6 my-6 md:my-11">${workDetail.content}</p>

        <img src="${workDetail.img2}" alt="" class="w-full">
        <img src="${workDetail.img3}" alt="" class="w-full my-6 md:my-11">
    </div>
`
Render("WorkDetail", htmlsWorkDetail)
// Render Footer
Render("footer", Footer);
