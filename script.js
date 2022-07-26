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
