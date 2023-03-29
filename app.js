// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = ['aqua', 'green', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow', 'fuchsia','silver', 'teal', 'aqua'];

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    ballonsMap[position] = null;

    render();
}

let container = document.querySelector('#balloon-map');

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        return color !== null
        ? `<div class="balloon active" style="background: ${color}" data-position="${position}"></div>`
        : `<div class="balloon popped" style="background: ${color}" data-position="${position}"></div>` 
    });

    let activeBalloons = ballonsMap.filter(b => b !== null).length; 
    document.querySelector("#balloon-count").innerHTML =  activeBalloons; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    addEventToBaloons();
    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();



function addEventToBaloons(){
    const elements = container.childNodes;

    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener('click', e => {
            popBalloon(e.target.dataset.position);
            console.log(e.target.dataset.position)
        })
    }
}