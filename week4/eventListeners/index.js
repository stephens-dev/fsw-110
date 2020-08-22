var box = document.createElement("div")
document.body.append(box)

box.style.backgroundColor = "black"
box.style.height = "200px"
box.style.width = "200px"
box.style.margin = "42%"
box.style.marginTop = "15%"

function blue() {
    box.style.backgroundColor = "blue"
}

function red() {
    box.style.backgroundColor = "red"
}

function yellow() {
    box.style.backgroundColor = "yellow"
}

function green() {
    box.style.backgroundColor = "green"
}

function orange() {
    box.style.backgroundColor = "orange"
}

function key(event) {
    console.log(event)
    if (event.key == "b") {
        blue()
    } else if (event.key == "r") {
        red()
    } else if (event.key == "y") {
        yellow()
    } else if (event.key == "g") {
        green()
    } else if (event.key == "o") {
        orange()
    }
}
box.addEventListener("mouseover", blue)
box.addEventListener("mousedown", red)
box.addEventListener("mouseup", yellow)
box.addEventListener("dblclick", green)
document.addEventListener("scroll", orange)
window.addEventListener("keydown", key)