// H1 element
var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my js site!"
document.body.append(newH1)

// Paragraph
var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)
// List items
var newOl = document.createElement("ol")
document.body.append(newOl)

var newli1 = document.createElement("li")
newli1.textContent = "one"
newOl.append(newli1)

var newLi2 = document.createElement("li")
newLi2.textContent = "two"
newOl.append(newLi2)

var newLi3 = document.createElement("li")
newLi3.textContent = "three"
newOl.append(newLi3)








