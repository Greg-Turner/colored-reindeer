// a generator function that sequentially yields colors from an array
const getNextColor = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let counter = 0

    while (counter < colors.length) {
        let currentColor = colors[counter]
        yield currentColor
        counter += 1  // Increment the counter
    }
}

// Create instance of generator
const nextColorFactory = getNextColor() 

// create a coloredReindeer array to populate later
const coloredReindeer = []

// an array of reindeer names
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    // a for loop that looks at each reindeer
    for (let i = 0; i < reindeer.length; i++) {
        let currentDeer = reindeer[i];        
    
        // a factory function that creates a new object using a deerName parameter provided
        const paintReindeer = function () {
            return Object.create(null, {
                "name": {
                    enumerable: true,
                    value: currentDeer
                },
                "color": {
                    enumerable: true,
                    value: nextColorFactory.next().value
                }
            })
        }
        // Put new reindeer object in coloredReindeer array
        let currentPuller = paintReindeer();
        coloredReindeer.push(currentPuller)
    }
    // Return the end result coloredReindeer array
    return coloredReindeer
}

// call the coloredReindeerBuilder factory function to have returned the coloredReindeer array full of factory created objects
const coloredReindeerDbase = coloredReindeerBuilder()
console.log(coloredReindeerDbase)
// convert inventory database into string saved in browser memory
const coloredReindeerString = JSON.stringify(coloredReindeerDbase)
localStorage.setItem("coloredReindeer", coloredReindeerString)
 
 
