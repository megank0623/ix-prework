//this section controls the text entry area

let inputFoods = document.getElementById("input-foods")
let radioEdit = document.getElementById("rad-edit")
let checkEdit = document.getElementById("check-edit")

function foods(){
    let foodAdd = document.getElementById("food-type").value
    inputFoods.innerText += " " + foodAdd + ","
}

function radio(){
    radioEdit.innerText = "You clicked the radio button!"
}

function checkbox(){
    checkEdit.innerText = "You clicked the checkbox!"
}