// retrieve coloredReindeer from local storage and parse it into a database
let coloredSledPullers = JSON.parse(localStorage.getItem("coloredReindeer"))

// select the element tag ID of colored-reindeer
let reindeerEl = document.getElementById("colored-reindeer")

// iterate over the coloredReindeer array
for (let i = 0; i < coloredSledPullers.length; i++) {
    let post = coloredSledPullers[i];
    
    // inject a section class="color" into the innerHTL and post the deer name
    reindeerEl.innerHTML += `
    <section class="${post.color}"><font color="${post.color}">${post.name}</font></section>
    `

}