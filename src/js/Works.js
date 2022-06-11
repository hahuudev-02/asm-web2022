import "../../index.css";
import Render from "../store/Render";
import { workList } from "../services/initdata/WorkList";

import { Menu, toggleMenu } from "../compoments/header";
import FeaturedWork from "../compoments/FeaturedWork";
import Footer from "../compoments/Footer";

// Render menu
Render("menu", Menu);
toggleMenu();

// Render POST
const htmlsWorks = workList.map(
    (work) => `
    ${FeaturedWork({...work})}
`
);
Render("work-list", htmlsWorks.join(''));

// Render Footer
Render("footer", Footer);
