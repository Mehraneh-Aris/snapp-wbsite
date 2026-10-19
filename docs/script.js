
const menuItem = document.querySelectorAll('.items-list');
const hamberMenu = document.querySelector('#hamber_menu');
const navRespon = document.querySelector('.nav-respon');
const sliderImage = document.querySelector("#slider-image");
const sliderButtons = document.querySelectorAll(".slider-button");

const images = [
    "./assect/img/slider/Club.jpg",
    "./assect/img/slider/Food.jpg",
    "./assect/img/slider/Market.jpg"
];

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        const menuRes = item.nextElementSibling;
        menuRes.classList.toggle('show');
    });
});

hamberMenu.addEventListener('click', ()=>{
        navRespon.classList.toggle('hidden')
    
})

// add slider functionality

let currentIndex = 0;

function showSlide(index) {
    currentIndex = index;

    sliderImage.src = images[currentIndex];

    sliderButtons.forEach((button) => {
        button.classList.remove("active");
    });

    sliderButtons[currentIndex].classList.add("active");
}

sliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        showSlide(index);
    });
});

setInterval(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    showSlide(nextIndex);
}, 3000);