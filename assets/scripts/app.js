const sections = document.querySelectorAll('main > section')
const menuItems = document.querySelectorAll('.nav-menu__item')
const header = document.querySelector('.header')
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});
function scrollHeader() {
    this.scrollY >= 50 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll')
}
window.addEventListener('scroll', scrollHeader)
function removeActiveClass(className) {
    document.querySelector(`.${className}`).classList.remove(className)
}
const observer = new IntersectionObserver(observerHandler, {
    threshold: 0.5
});
function observerHandler(allSections) {
    allSections.map(section => {
        if (section.isIntersecting) {
            let sectionClassName = section.target.className
            document.querySelector(`.nav-menu__item[data-section=${sectionClassName}]`).classList.add('nav-menu__item--active')
        } else {
            let sectionClassName = section.target.className
            document.querySelector(`.nav-menu__item[data-section=${sectionClassName}]`).classList.remove('nav-menu__item--active')
        }
    })
}
// Add ObServer To All Sections
sections.forEach(section => {
    observer.observe(section)
})
// Goto Section And Remove Active class from List Menu
menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        if(document.querySelector('.nav-menu__item--active') == null) {
            let sectionName = item.getAttribute('data-section')
            // document.querySelector(`.nav-menu__item[data-section=${sectionClassName}]`).classList.add('nav-menu__item--active')
            let sectionOffsetTop = document.querySelector(`.${sectionName}`).offsetTop
            window.scrollTo({
                top: sectionOffsetTop + -110,
                behavior: 'smooth'
            })
        }
        e.preventDefault()
        removeActiveClass('nav-menu__item--active')
        item.classList.add('nav-menu__item--active')
        let sectionClass = item.getAttribute('data-section')
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop
        window.scrollTo({
            top: sectionOffsetTop + -110,
            behavior: 'smooth'
        })
    })
})
// Scroll Reveal Codes
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
})
sr.reveal('.shadow', {delay: 200, origin: 'left'})
sr.reveal('.home__content-wrapper', {delay: 400, origin: 'left'})
sr.reveal('.home__img-wrapper', {delay: 700, origin: 'right'})
sr.reveal('.section-head', {delay: 700, origin: 'top'})
sr.reveal('.service-1', {delay: 300, origin: 'left'})
sr.reveal('.service-2', {delay: 350, origin: 'top'})
sr.reveal('.service-3', {delay: 400, origin: 'right'})
sr.reveal('.service-4', {delay: 300, origin: 'right'})
sr.reveal('.service-5', {delay: 350, origin: 'bottom'})
sr.reveal('.service-6', {delay: 400, origin: 'left'})
sr.reveal('.about-us__img-wrapper', {delay: 400, origin: 'left'})
sr.reveal('.about-us__content-wrapper', {delay: 400, origin: 'right'})
sr.reveal('.skills__content-wrapper', {delay: 400, origin: 'left'})
sr.reveal('.skills__img-wrapper', {delay: 400, origin: 'right'})
sr.reveal('.team', {delay: 400, origin: 'top'})
sr.reveal('.newsletter', {delay: 400, origin: 'top'})


function scrollUp() {
    const scrollUp = document.querySelector(".scroll-up");

    if (scrollY >= 350) scrollUp.classList.add("scroll-up--show");
    else scrollUp.classList.remove("scroll-up--show");
}

window.addEventListener("scroll", scrollUp);