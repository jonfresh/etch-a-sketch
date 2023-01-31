const defaultSize = 64
const defaultColor = "#f00"
const defaultMode = 0

let currentSize = defaultSize
let currentColor = defaultColor
let currentMode = defaultMode

function setSize() {
  clearGrid()
  updateSize()
  gridSize(currentSize, currentSize)
}

function setColor(newColor) {
  getColor(newColor)
  
}

function setMode(newMode) {
  getMode(newMode)
  activateBtn(newMode)
}

const container = document.getElementById("gridContainer");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const ludicrousBtn = document.getElementById("ludicrousBtn");
const gridSlider = document.getElementById("gridSlider");
const colorPicker = new iro.ColorPicker('#picker', {
  width: 250,
  color: "#f00"
});

colorPicker.on('color:change', (color) => { setColor(color.hexString)});
colorPicker.on('color:change', (color) => { setMode('color')});
eraserBtn.addEventListener("click", () => { setMode('eraser')});
clearBtn.addEventListener("click", () => { setMode('clear')});
ludicrousBtn.addEventListener("click", () => { setMode('ludicrous')});
gridSlider.addEventListener("change", () => { document.getElementById("rangeValue").textContent = gridSlider.value; }, false);
gridSlider.addEventListener("change", () => { setSize()});


function getColor(newColor) {
  currentColor = newColor
}

function setSwatch () {
  let e = newColor
  alert(e)
}

function getMode(newMode) {
  if (newMode === "eraser") {
    getColor("#FFF")
  } else if (newMode === "clear") {
    clearGrid()
  } else {
    return
  }
}

function clearGrid() {
  Array.from(document.querySelectorAll(".gridItem")).forEach((el) => el.style.backgroundColor = "#FFF");
}

function activateBtn(newMode) {
  if (newMode === 'eraser') {
    document.getElementById("eraserBtn").classList.toggle("selectedBtn");
    document.getElementById("ludicrousBtn").classList.remove("selectedBtn");
  } else if (newMode === 'ludicrous') {
    document.getElementById("ludicrousBtn").classList.toggle("selectedBtn");
    document.getElementById("eraserBtn").classList.remove("selectedBtn");
  } else {
    Array.from(document.querySelectorAll(".button")).forEach((el) => el.classList.remove('selectedBtn'));
  }
}

function updateSize(gridRangeValue) {
  currentSize = document.getElementById("rangeValue").textContent = gridSlider.value;
}

function gridSize(rows, cols) {
  container.style.setProperty('--grid-rows', rows)
  container.style.setProperty('--grid-cols', cols)
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div")
    container.appendChild(cell).classList = "gridItem"
  };
};

// Set Max Grid 
gridSize(64, 64)
// Set Starting Grid 
gridSize(16, 16)

let hoverCell = document.querySelectorAll('.gridItem')
  for (const color of hoverCell) {
    if (currentMode !== 'ludicrous') {
    color.addEventListener('mouseover', () => {
      color.style.backgroundColor = currentColor
    })} else {
    color.addEventListener('mouseover', () => {
      color.style.backgroundColor = '#red'
    })}
  }