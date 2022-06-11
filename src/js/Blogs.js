import "../../index.css";
import Render from "../store/Render";

import { Menu, toggleMenu } from "../compoments/header";
import Blog from "../compoments/Blog";
import Footer from "../compoments/Footer";

// Render menu
Render("menu", Menu);
toggleMenu();

// Render POST
const blogs = [
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
    },
    {
        id: 3,
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Express, Handlebars",
        conten: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

const htmlsBlogs = blogs.map(blog => `
    ${Blog({...blog})}
`)
Render("blog-list", htmlsBlogs.join(''));

// Render Footer
Render("footer", Footer);
