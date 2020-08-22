


function add(){
    var add1 = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value)
    var addsum = document.getElementById("addsum")
    addsum.textContent = add1
}

function subtract(){
    var sub1 = parseInt(document.getElementById("num3").value) - parseInt(document.getElementById("num4").value)
    var subsum = document.getElementById("subsum")
    subsum.textContent = sub1
}

function multiply(){
    var mul1 = parseInt(document.getElementById("num5").value) * parseInt(document.getElementById("num6").value)
    var mulsum = document.getElementById("mulsum")
    mulsum.textContent = mul1
}