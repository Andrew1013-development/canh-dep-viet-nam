const items = document.querySelectorAll(".carousel-items .element");
let active_explainer = document.querySelector(".carousel-explainers .element.active");

items.forEach(item => {
    item.addEventListener("click", () => {
        const target_explainer = document.getElementById(item.getAttribute("data-target"));        
        if (active_explainer == target_explainer) return;
        if (active_explainer != null) {
            active_explainer.classList.remove("active"); // hide active explainer
            //active_explainer.style.display = "none" // remove active explainer from DOM
        } 
        //target_explainer.style.display = "block"; // add target explainer into DOM (necessary for animation)
        target_explainer.classList.add("active"); // enable target explainer
        target_explainer.scrollIntoView({behavior: "smooth"}); // scroll into view
        active_explainer = target_explainer;
    });
});