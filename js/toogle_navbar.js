let nav_slide = () => {
    let burger = document.querySelector('.burger');
    let nav_links = document.querySelector('.navbar');
    burger.addEventListener('click', () => {
        nav_links.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}
nav_slide();