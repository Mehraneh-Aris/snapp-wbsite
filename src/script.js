
const menuItem = document.querySelectorAll('.items-list');
const hamberMenu = document.querySelector('#hamber_menu');
const navRespon = document.querySelector('.nav-respon');

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        const menuRes = item.nextElementSibling;
        menuRes.classList.toggle('show');
    });
});

hamberMenu.addEventListener('click', ()=>{
        navRespon.classList.toggle('hidden')
    
})

