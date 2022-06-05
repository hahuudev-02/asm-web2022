import "../../index.css";
import Render from "../store/Render";
import { workList } from "../services/initdata/WorkList";

import { Menu, toggleMenu } from "../compoments/header";
import Post from "../compoments/Post";
import FeaturedWork from "../compoments/FeaturedWork";
import Footer from "../compoments/Footer";

// Render menu
Render("menu", Menu);
toggleMenu();

// Render Posts-list
const posts = [
    {
        id: 1,
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Express, Handlebars",
        conten: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Express, Handlebars",
        conten: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    }
]

const htmlsBlogs = posts.map(post => `
    ${Post({...post}, false)}
`)
Render("posts-list", htmlsBlogs);

// Render FeatureWork-list
const htmlsFeatureWork = workList.map(
    (feature) => `
    ${FeaturedWork({...feature})}
`
);

Render("Featured__works-list", htmlsFeatureWork.join(""));

// Render Footer
Render("footer", Footer);
