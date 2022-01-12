const board = document.querySelector("#board")
const SQUARES_NUMBER = 500
const colors = ["#ffc353", "#4dffc9","#9023e9","#b465e2","#c9d1ff",]

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", setColor)
    square.addEventListener("mouseleave", removeColor)

    board.append(square)
}

function setColor(event){
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow =`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event){
    const element = event.target
    element.style.backgroundColor = "#cea3ff"
    element.style.boxShadow = `0 0 2px #d0ff00`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

