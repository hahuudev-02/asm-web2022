import "../../index.css";
import Render from "../store/Render";

import { Menu } from "../compoments/header";
import Post from "../compoments/Post";
import FeaturedWork from "../compoments/FeaturedWork";
import Footer from "../compoments/Footer";

const postOne =
    Post("Making a design system from scratch") + Post("Making a design system from scratch");

// Render menu
Render("menu", Menu);

// Render Posts-list
Render("posts-list", postOne);

// Render FeatureWork-list
const FeatureWorks = [
    {
        img: "img/Rectangle 30.jpg",
        title: "Designing Dashboards",
        year: "2020",
        description: "Dashboard",
        conten: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        img: "img/Rectangle 32.jpg",
        title: "Vibrant Portraits of 2020",
        year: "2018",
        description: "Illustration",
        conten: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        img: "img/Rectangle 34.jpg",
        title: "36 Days of Malayalam type",
        year: "2018",
        description: "Typography",
        conten: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

const htmlsFeatureWork = FeatureWorks.map((feature) => `
    ${FeaturedWork(feature.img, feature.title, feature.year, feature.description, feature.conten)}
`)

Render("Featured__works-list", htmlsFeatureWork.join(''))

// Render Posts
Render("footer", Footer)
