const events = document.querySelectorAll(".timeline .container .event .preview .trigger");

events.forEach(event => {
    event.addEventListener("click", () => {
        const target_card = document.getElementById(event.getAttribute("data-target"));
        if (target_card.classList.contains("active")) target_card.classList.remove("active");
        else target_card.classList.add("active");
    });
});