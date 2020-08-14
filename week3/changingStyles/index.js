function fiveh2(){
    var H2 = document.createElement("h2")
    H2.textContent = "Hello World"
    document.body.append(H2)
    H2.style.color = "cornflowerblue"
    H2.style.fontSize = "20px"
    H2.style.fontWeight = "lighter"
    H2.style.fontFamily = "sans-serif"
    H2.classList.add("border")

  //  document.querySelectorAll("h2").classList.add(".border")
//document.fLine.classList.add(".border")
    }
    // for loop to make 5 h2 elements
    for (i = 0; i < 5; i++ ) {
        
            fiveh2()
            //document.querySelector("h2").classList.add("border")

        
    }
   // document.querySelector("h2").classList.add("border")

  //  var fLine = document.getElementsByTagName("h2")
    //document.body.fLine.classList.add("border")
//document.getElementsByTagName("h2").classList.add("border")
//console.log(document.getElementsByTagName("h2").className)
//  document.querySelector("#header").classList.add("new-class")
//console.log(document.querySelector("#header").className)