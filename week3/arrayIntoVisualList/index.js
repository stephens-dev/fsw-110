// Creating an h1 element
function tenh1(name){
var H1 = document.createElement("h1")
H1.textContent = name||"Hello World"
document.body.append(H1)
H1.style.color = "blue"
H1.style.textAlign = "center"
H1.style.paddingBottom = "15px"
}
// for loop to make 10 h1 elements
for (var i = 0; i < 10; i++ ) {
    if (i < 10 ){
        tenh1()
    }
}
// Array of names
var n = [
{name: "steve"},
{name: "larry"},
{name: "joe"},
{name: "shirley"},
{name: "steph"},
{name: "nate"},
{name: "rick"},
{name: "emily"}
]
console.log(n.length)
for (var  i = 0; i < n.length; i++) {
        tenh1(n[i].name)
}
//console.log(n)