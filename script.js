let index = 0;
const slides = document.querySelectorAll(".slide");

function trocarSlide() {

    slides[index].classList.remove("active");

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");
}

setInterval(trocarSlide, 3000);

  let button = document.getElementById("hamburguer");
        const menu = document.getElementById("menu");

        button.addEventListener("click", function() {
            menu.classList.toggle("ativa");
        })

