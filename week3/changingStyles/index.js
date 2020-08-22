function fiveh2(){
    var H2 = document.createElement("h2")
    H2.textContent = "Hello World"
    document.body.append(H2)
    H2.style.color = "cornflowerblue"
    H2.style.fontSize = "20px"
    H2.style.fontWeight = "lighter"
    H2.style.fontFamily = "sans-serif"
    H2.classList.add("border")

  
    }
    // for loop to make 5 h2 elements
    for (i = 0; i < 5; i++ ) {
        
            fiveh2()
            

        
    }
