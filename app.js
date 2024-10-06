const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const description1 = document.getElementById('#description')
const description2 = document.getElementById('#description2')
const text3d = document.querySelector('.hero__heading')
const hiddenElements = document.querySelectorAll('.hidden')

var shadowFor3d = ''

//da display la meniu pe telefon

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)


description1.addEventListener('animationend', () => {
    description1.classList.add('finished__typing');
});
description2.addEventListener('animationend', () => {
    description2.classList.add('finished__typing2');
});


for(var i = 0; i<30; i++)
{
    shadowFor3d += (shadowFor3d? ',': '')+ -i*1+'px ' +i*1+'px 0 #6f0000'
}

text3d.style.textShadow = shadowFor3d


