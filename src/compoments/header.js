export const Menu = `
    <div class="h-[50px] flex justify-between">
        <div class="h-full w-full relative  flex items-center justify-between">
            <a href="/index.html" class="menu-link"></a>  
            
            <div class="menu hidden h-full md:flex items-center justify-end md:space-x-12 ">
                <a href="/work.html" class="menu-link">Works</a>
                <a href="/blog.html" class="menu-link">Blog</a>
                <a href="" class="menu-link">Contact</a>
            </div>
        </div>

        <div class="menu-icon h-full flex items-center justify-end md:hidden cursor-pointer">
            <img src="img/dotbars.png" alt="" class="w-8"/>
        </div>
    </div>
`;
export const toggleMenu = () => {
    const toggleMenuIcon = document.querySelector(".menu-icon");
    const toggleMenu = document.querySelector(".menu");
    

    document.addEventListener("click", (e) => {
        if (toggleMenuIcon.contains(e.target)) {
            toggleMenu.classList.toggle("menu-screen-mobie");
        } else {
            toggleMenu.classList.remove("menu-screen-mobie");
        }
    });
    window.addEventListener('resize', (e) => {
        let isTogggleMenu = toggleMenu.classList.contains('menu-screen-mobie')
        if(window.innerWidth > 768 && isTogggleMenu) {
            toggleMenu.classList.remove("menu-screen-mobie");
        }
    })
};
