const links = document.querySelectorAll('.menu__link')

for (let i = 0; i < links.length; i++) {
    const el = links[i]
    el.addEventListener('click', function () {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

const burger = document.querySelector('.header__btn')
const menu = document.querySelector('.menu')

burger.addEventListener('click', function () {
    this.classList.toggle('active')
    menu.classList.toggle('active')
})