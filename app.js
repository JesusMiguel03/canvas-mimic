/**
 *  Variables
 */
const [canvas, color, btn, colorName, pixels] = [
    document.querySelector(".canvas"),
    document.querySelector("#color"),
    document.querySelector("button"),
    document.querySelector("span"),
    [],
]

/**
 *  Set picked color to black, canvas color and pixel size
 */
let [pickedColor, defaultColor, size] = ['#000000', '#eeeeee', '32px']
colorName.innerText = pickedColor

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        let pixel = document.createElement("div")
    
        pixel.style.backgroundColor = defaultColor
        pixel.style.width = size
        pixel.style.height = size

        pixels.push(pixel)
        canvas.append(pixel)
    }
}

/**
 *  Get color from input
 */
color.addEventListener("input", (e) => {
    pickedColor = e.currentTarget.value
    colorName.innerText = pickedColor
    console.log(pickedColor)
})

/**
 *  Left click to paint, right click to clean
 */
pixels.forEach((pixel) => {
    pixel.addEventListener("click", (e) => {
        e.currentTarget.style.backgroundColor = pickedColor
    })

    pixel.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        e.currentTarget.style.backgroundColor = defaultColor
    })
})

/**
 *  Cleans canvas
 */
btn.addEventListener("click", () => {
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = defaultColor
    })
})