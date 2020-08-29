const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const destinationInputs = []
    
    for(let i = 0; i < form.destination.length; i++){
        if(form.destination[i].checked){
            destinationInputs.push(form.destination[i].value)
        }
    }

const dietInputs = []

    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietInputs.push(form.diet[i].value)
        }
    }

const fN = form.fName.value
const lN = form.lName.value
const Age = form.age.value
const gen = form.gender.value

alert("First name: " + fN + "\n"+ "Last name: " + lN + "\nAge: "+ Age+"\n" +"Gender: "+ gen)
})