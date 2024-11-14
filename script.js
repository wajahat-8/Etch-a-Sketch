const container = document.getElementById("container");
let rows = document.getElementsByClassName("grid-row");
let columns = document.getElementsByClassName("cell");
let button = document.getElementById("btn");
button.addEventListener("click", customSize)
function customSize() {
    let userInput = parseInt(prompt("Enter a grid size (max value 100)"));

    while (userInput > 100 || isNaN(userInput)) {
        userInput = parseInt(prompt("Please enter a valid grid size less than or equal to 100:"));

    }
    defaultGrid(userInput);

}


function defaultGrid(numSquaresPerSide = 16) {
    container.innerHTML = ""
    makeRows(numSquaresPerSide);
    makeColumns(numSquaresPerSide);
}

function makeRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        row.className = "grid-row";
        container.appendChild(row);
    }
}

function makeColumns(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.className = "cell";
            rows[i].appendChild(newCell);
            newCell.addEventListener("mouseover", (event) => { event.target.style.backgroundColor = getRandomRGBA() });

        }
    }

}

function getRandomRGBA(){
    const r=Math.floor(Math.random()*256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a=Math.floor(Math.random()*256);
    return`rgba(${r},${g},${b},${a})`;


}

defaultGrid();
