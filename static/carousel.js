const items = document.querySelectorAll(".carousel-items .element");
let active_explainer = document.querySelector(".carousel-explainers .element.active");

items.forEach(item => {
    item.addEventListener("click", () => {
        const target_explainer = document.getElementById(item.getAttribute("data-target"));        
        if (active_explainer == target_explainer) return;
        if (active_explainer != null) active_explainer.classList.remove("active");
        target_explainer.classList.add("active");
        active_explainer = target_explainer;
    });
});