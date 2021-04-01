// Main JS
// Click On Toggle
let toggle = document.querySelector('.toggle');
let div = document.querySelector('.form');

toggle.addEventListener('click', () => {
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});