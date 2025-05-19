const colorSelector = document.querySelector(".color-selector")
const btn = document.querySelector(".btn")
const scheme = document.querySelector('.color-scheme')

let color = colorSelector.value
let colorSchemeArray = []

getScheme()

colorSelector.addEventListener('change', (e)=>{
    color = e.target.value
})

btn.addEventListener("click", ()=>{
  getScheme()
})

function getScheme(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${scheme.value}&count=4`)
    .then(res => res.json())
    .then(data => {
        colorSchemeArray = data.colors.map(color => color.hex.value)
        colorSchemeArray.unshift(color)
        assignColors()
    
    })
}

function assignColors(){
      const bottomSectionChildren = document.querySelector(".bottom-section").children
      
    
      colorSchemeArray.forEach((color, index) => {
        const grandChildren = bottomSectionChildren[index].children
        grandChildren[0].style.backgroundColor = color
        grandChildren[1].textContent = color.toUpperCase()
      })
 
}