/* ------------------------ Логика бургер-меню ------------------------ */
// Бургер-кнопка
const burgerMenu = document.querySelector('#burger_menu');
// Меню со ссылками
const nav_menu = document.querySelector('#nav_menu');

// Обработка клика на бургер
burgerMenu.addEventListener('click', function() {
    // Изменяем видимость
    this.classList.toggle('active');
    nav_menu.classList.toggle('active');
    document.body.classList.toggle('no_scroll');
});

const header_links_array = document.querySelectorAll('.header-link');

header_links_array.forEach((link) => {
    link.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        nav_menu.classList.toggle('active');
        document.body.classList.toggle('no_scroll');
    });
});