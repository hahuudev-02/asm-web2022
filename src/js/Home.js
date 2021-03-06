import "../../index.css";
import Render from "../store/Render";
import { workList } from "../services/initdata/WorkList";
import { User } from "../services/initdata/User";

import { Menu, toggleMenu } from "../compoments/header";
import Post from "../compoments/Post";
import FeaturedWork from "../compoments/FeaturedWork";
import Footer from "../compoments/Footer";

// Render menu
Render("menu", Menu);
toggleMenu();

// Render User
const htmlsUser = `
    <div class="intro flex-1 flex flex-col items-center justify-center md:block  mt-4 md:mt-2">
        <div class="text-[32px] md:text-[44px] font-bold text-center md:text-left">
            <h1 class="">${User.name}</h1>
            <h2>${User.work}</h2>
        </div>
        <p class="text-base my-6 md:my-10 text-center md:text-left md:max-w-[697px]">
            ${User.description}
        </p>
        <a
            href=""
            class="w-[208px] h-[47px] leading-[44px] bg-[#FF6464] rounded-sm text-xl text-white text-center mb-13 md:mb-0"
        >
            Download Resume
        </a>
    </div>

    <div class="image md:ml-[115px]">
        <img src="${User.img}" alt="" class="w-[243px] mx-auto" />
    </div>
`;

Render("user", htmlsUser);

// Render Posts-list
const posts = [
    {
        id: 1,
        title: "Making a design system from scratch",
        date: "12 Feb 2020",
        description: "Express, Handlebars",
        conten: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        title: "Creating pixel perfect icons in Figma",
        date: "12 Feb 2020",
        description: "Express, Handlebars",
        conten: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

const htmlsBlogs = posts.map(
    (post) => `
    ${Post({ ...post }, false)}
`
);
Render("posts-list", htmlsBlogs);

// Render FeatureWork-list
const htmlsFeatureWork = workList.map(
    (feature) => `
    ${FeaturedWork({ ...feature })}
`
);

Render("Featured__works-list", htmlsFeatureWork.join(""));

// Render Footer
Render("footer", Footer);
