const Render = function (elementId, htmls) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = htmls;
    }
};

export default Render;