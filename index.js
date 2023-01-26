//imports
import {slowDown} from "./utils.js";

//document queries
const btn = document.querySelector("button")
const input = document.querySelector("input")
const chart = document.querySelector("#chart-container")

//STATES

//nodes containing numbers user wrote
const data = []

//FUNCTIONS
//1 -create and add new node to data array representing the number user entered
const addNewNumber = (nr) => {
    const div = document.createElement("div")
    div.classList.add("element")
    div.setAttribute("data-nr", nr.toString())
    data.push(div)
    renderNumbers(data)
}
//render all nodes from data array to chart
const renderNumbers = () => {
    data.forEach((el, i)=>{
        el.style.height = `${el.dataset.nr*0.9}%`
        chart.appendChild(el)
    })
}

//sort all elements in a specific, animated way
const sortElements = async (elements) => {
    elements[0].classList.add("current")
    await slowDown(100)
    for (let j = 0; j < elements.length-1; j++) {

    for (let i = 0; i < elements.length-j; i++) {
        if (elements[i+1] && (parseInt(elements[i].dataset.nr) > parseInt(elements[i+1].dataset.nr))){
            let temporaryVariable = elements[i]
            elements[i] = elements[i+1]
            elements[i+1] = temporaryVariable
            renderUpdatedChart()
        }else{
            if (elements[i+1+j]){
                elements[i].classList.remove("current")
                elements[i+1].classList.add("current")
            } else if(!elements[i+1+j]){
                elements[i].classList.remove("current")
                elements[0].classList.add("current")
        }}
        await slowDown(100)
    }}
    elements[0].classList.remove("current")
}

const renderUpdatedChart = () => {
   chart.innerHTML = ""
    renderNumbers()
}

//EVENT LISTENERS

//listen to new number input
input.addEventListener("keydown", (e)=>{
    if (
        e.key === "Enter" &&
        e.target.value <=100 &&
        e.target.value > 0
    ){
        addNewNumber(e.target.value)
        e.target.value = ""
    }

})
btn.addEventListener("click",()=> sortElements(data))





