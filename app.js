//selectors
const canvas = document.querySelector('canvas');
const topBar = document.querySelector('.top-bar');
const dropBox = document.querySelector('.colors-container');

//global vars
const topBarHeight = topBar.offsetHeight;
let colorsNumber = 45;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - topBarHeight;

console.log(topBarHeight)

//event listeners


//functions
function dropDown(){
    if(dropBox.style.display === 'grid'){
        dropBox.style.display = 'none';
    }else{
        dropBox.style.display = 'grid';
    }
    console.log(dropBox.style.display)
};

function fillColors(){
    let colors = [];
    for(let i = 0;  i < colorsNumber/3; i++){
        colors.push({
            r: Math.floor(255 -  17 * i),
            g: 0,
            b: 0 
        })
    }
    
    for(let i = 0;  i < colorsNumber/3; i++){
        colors.push({
            r: 0,
            g: Math.floor(255 -  17 * i),
            b: 0 
        }) 
    }
    for(let i = 0;  i < colorsNumber/3; i++){
        colors.push({
            r: 0,
            g: 0,
            b: Math.floor(255 -  17 * i) 
        }) 
    }
    for(let i = 0;  i < colorsNumber; i++){
        const colorDiv =  document.createElement('div');
        const colorBtn = document.createElement('button');
        let backgroundColor = `rgb(${colors[i].r},${colors[i].g},${colors[i].b})`
        colorBtn.classList.add('color-square');
        colorDiv.appendChild(colorBtn);
        colorBtn.style.background = backgroundColor
        console.log(backgroundColor)
        dropBox.appendChild(colorDiv)        
    }

    console.log(colors);
}

fillColors();