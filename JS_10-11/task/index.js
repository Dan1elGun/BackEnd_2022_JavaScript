let squares = document.querySelectorAll(".square")

squares.forEach(element => {
    element.onmouseover = function() {
    element.style.background = "red"
    element.style.backgroundImage = "url('smile.png')"
    element.style.backgroundSize = "50px 50px"
    //element.setAttribute("style", "background: red; background-image: url('smile.png'); background-size: 50px 50px;")
    }
});

squares.forEach(element => {
    element.onclick = function() {

    //let new_element = element.cloneNode(true)
    //new_element.style.opacity = 0;

    let new_element = document.createElement('img')
    new_element.src = "smile.png"
    new_element.setAttribute("class", "square")
    new_element.style.background = "none"

    element.replaceWith(new_element)
    }
});

