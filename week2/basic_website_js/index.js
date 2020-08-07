// Navbar
var newNav = document.createElement("nav")
document.body.append(newNav)


var home = document.createElement("a")
home.textContent = "Home "
home.href = ""
newNav.append(home)


var main = document.createElement("a")
main.textContent = "main "
main.href = ""
newNav.append(main)


var foot = document.createElement("a")
foot.textContent ="footer "
foot.href = ""
newNav.append(foot)

// H1 Element
var newH1 = document.createElement("h1")
newH1.textContent = "This is my H1 element"
document.body.append(newH1)

// Paragraph Element
var newP = document.createElement("p")
newP.textContent = "This is the paragraph"
document.body.append(newP)

// List Items
var newOl = document.createElement("ol")
document.body.append(newOl)


var newLi1 = document.createElement("li")
newLi1.textContent = "one"
newOl.append(newLi1)


var newLi2 = document.createElement("li")
newLi2.textContent = "two"
newOl.append(newLi2)


var newLi3 = document.createElement("li")
newLi3.textContent = "three"
newOl.append(newLi3)

// Footer
var newFooter = document.createElement("footer")
newFooter.textContent = "This is the footer"
document.body.append(newFooter)