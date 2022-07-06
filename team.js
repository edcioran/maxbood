document.addEventListener("click", function(e){
    console.log(e.target)
})

document.addEventListener("click", function(e){
    //OPENING
    if (e.target.classList.contains("card__overlay") && !e.target.parentElement.nextElementSibling.classList.contains("biography__opened")){
        
        let person__cards = document.querySelectorAll(".biography__opened")
        let toggle__icon = document.querySelectorAll(".bi-caret-up-fill")
        // CLOSE ALL THE OTHER ONES
        for (let i = 0; i < person__cards.length; i++) {
            person__cards[i].classList.remove("biography__opened")
            toggle__icon[i].classList.replace("bi-caret-up-fill","bi-caret-down-fill")
        }
        
        e.target.parentElement.nextElementSibling.classList.toggle("biography__opened")
        e.target.previousElementSibling.firstElementChild.classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }

    //CLOSING
    else if (e.target.classList.contains("card__overlay") && e.target.parentElement.nextElementSibling.classList.contains("biography__opened")){
        e.target.parentElement.nextElementSibling.classList.toggle("biography__opened")
        e.target.previousElementSibling.firstElementChild.classList.replace("bi-caret-up-fill","bi-caret-down-fill")
    }
})