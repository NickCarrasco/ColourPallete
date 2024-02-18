const colorPicker = document.getElementById("color-picker")
const colorSchemePicker = document.getElementById("color-scheme")
const btn = document.getElementById("find-scheme-btn")

const colorCodes = []
const colorElements = []
for(let i = 0; i < 5; i++){
    colorElements.push(document.getElementById(`color-${i+1}`))
    colorCodes.push(document.getElementById(`color-code-${i+1}`))
}

let colorScheme
let chosenColor

generateScheme()

function generateScheme(){
    colorScheme = colorSchemePicker.value
    chosenColor = colorPicker.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor.slice(1)}&mode=${colorScheme}&count=4`)
        .then(res => res.json())
        .then(data => assignColors(data.colors))
}

function assignColors(colors){ 
    colorCodes[0].textContent = chosenColor.toUpperCase()
    colorElements[0].style.backgroundColor = chosenColor 
     
    for(let i = 0; i < colors.length; i++){
        colorCodes[i+1].textContent = colors[i].hex.value
        colorElements[i+1].style.backgroundColor = colors[i].hex.value
    }
}

btn.addEventListener('click', ()=> generateScheme())


    