const defaultSize = 16
const defaultColor = "#000000"
const defaultMode = 0

let currentSize = defaultSize
let currentColor = defaultColor
let currentMode = defaultMode

function setSize(newSize) {
  gridSize(newSize)
  clearGrid()
}

function setColor(newColor) {
  getColor(newColor)
  setSwatch(newColor)
}

function setMode(newMode) {
  getMode(newMode)
  activateBtn(newMode)
}

const container = document.getElementById("gridContainer");
const colorPicker = new iro.ColorPicker('#picker');
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const ludicrousBtn = document.getElementById("ludicrousBtn");
const gridSlider = document.getElementById("gridSlider");
const gridRangeValue = document.getElementById("rangeValue");

eraserBtn.addEventListener("click", () => { setMode('eraser')});
clearBtn.addEventListener("click", () => { setMode('clear')});
ludicrousBtn.addEventListener("click", () => { setMode('ludicrous')});


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
    let e = newMode
    alert(e)
  }
}

function eraserTool(newMode) {

}

function clearGrid() {
  Array.from(document.querySelectorAll(".gridItem")).forEach((el) => el.style.backgroundColor = "#FFF");
}

function activateBtn(newMode) {
  Array.from(document.querySelectorAll(".button")).forEach((el) => el.classList.remove('selectedBtn'));
  if (newMode === 'eraser') {
    document.getElementById("eraserBtn").classList.add("selectedBtn");
  } else {
    return;
  }
}

function gridSize(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).classList = "gridItem";
  };
};

let size = 16;

gridSize(size, size);


let hoverCell = document.querySelectorAll('.gridItem');
  for (const color of hoverCell) {
    color.addEventListener('mouseover', () => {
      color.style.backgroundColor = currentColor;
    });
  }


