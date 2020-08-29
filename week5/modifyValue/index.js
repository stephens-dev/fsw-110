var box = document.getElementById("form")
var bod = document.getElementById("body")
var sub = document.getElementById("sub")
var fN = document.getElementById("fname")
var lN = document.getElementById("lname")
var inp = document.getElementsByTagName("input")
box.style.marginLeft = "42%"
box.style.marginTop = "5%"
box.style.backgroundColor = "offwhite"
box.style.width = "170px"
bod.style.backgroundColor = "lightGreen"
//sub.onsubmit(alert(fN.value +" "+ lN.value))
box.addEventListener("submit", function(){
    event.preventDefault()
    const fname = fN.value
    const lname = lN.value
    const age = form.number.value
    fN.value =""
    lN.value =""
    form.number.value =""
    alert("First name: " +fname+ "\n"+"Last name: " +lname+"\n "+ "age: "+age)
 
})
