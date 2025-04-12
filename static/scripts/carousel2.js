const viewport = document.querySelector(".carousel2 .viewport");
const items = Array.from(document.querySelectorAll(".carousel2 .viewport .item"));
const prev_button = document.querySelector(".carousel2 .navigation#prev");
const next_button = document.querySelector(".carousel2 .navigation#next");
let current = 0;

function go_to(index) {
    if (index < 0) index = 0; // lower bound
    if (index >= items.length) index = items.length - 1; // upper bound
    old_current = current; // save old variable
    current = index; // update global variable
    items[old_current].classList.remove("active");
    viewport.style.transform = `translateX(-${current * 100}%)`;
    items[current].classList.add("active");
}

prev_button.addEventListener("click", () => go_to(current - 1));
next_button.addEventListener("click", () => go_to(current + 1));   