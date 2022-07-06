let nav__menu = document.querySelector('.nav__menu')
let nav__toggle = document.querySelector('.nav__toggle')
let nav__toggle__close = document.querySelector('.nav__toggle__close')
let header = document.querySelector('header')
let brand__logo = document.querySelector("#brand__logo")

nav__toggle.addEventListener("click", function(){
    brand__logo.src="img/maxbood__logo__black.png"
    
    nav__menu.classList.replace("closed__nav__menu", "opened__nav__menu")
    
    setTimeout(function(){
        
        header.style.backgroundColor = "white"
        header.classList.add("header__bottom__border")
    }, 70)
    nav__toggle.style.display = "none"
    nav__toggle__close.style.display = "block"
})

nav__toggle__close.addEventListener("click", function(){
    
    header.classList.remove("header__bottom__border")
    

    nav__menu.classList.replace("opened__nav__menu", "closed__nav__menu")

    setTimeout(function(){
        header.style.backgroundColor = ""
        brand__logo.src="img/maxbood__logo.png"
    }, 330)
    nav__toggle.style.display = "block"
    nav__toggle__close.style.display = "none"
})

// ACCORDION

document.addEventListener("click", function(e){
    if (e.target.classList.contains("accordion__label__item") && e.target.parentElement.nextElementSibling.classList.contains("closed__accordion")) {
        e.target.parentElement.nextElementSibling.classList.replace("closed__accordion", "opened__accordion")
        e.target.parentElement.firstElementChild.classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }

    else if (e.target.classList.contains("accordion__label__item") && e.target.parentElement.nextElementSibling.classList.contains("opened__accordion")) {
        e.target.parentElement.nextElementSibling.classList.replace("opened__accordion", "closed__accordion")
        e.target.parentElement.firstElementChild.classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }

})