//selectors
const canvas = document.querySelector('canvas');
const topBar = document.querySelector('.top-bar');
const dropBox = document.querySelector('.colors-container');
const colorBox = document.querySelector('.color-square');
const pencilSize = document.querySelector('select');
const colorPlace = document.querySelector('.color-place')


//global vars
const topBarHeight = topBar.offsetHeight;
let colorsNumber = 45;
let color = 'rgb(0, 0, 0)';
let is_drawing = false;
let mouse_position = {
    x:  undefined,
    y:  undefined
};
let size = 5;

const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - topBarHeight;

//event listeners
dropBox.addEventListener('click', chooseColor);

document.addEventListener('mousedown', function(e){
    if(e.target.tagName == 'CANVAS'){
        is_drawing = true
    }
});

document.addEventListener('mouseup', function(){
    is_drawing = false;
});

document.addEventListener('mousemove', function(e){
    mouse_position = {
        x:  e.x,
        y:  e.y
    }
});

pencilSize.addEventListener('click', function(e){
    size = e.target.value
    console.log(size)
});

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
        dropBox.appendChild(colorDiv)        
    }

};

function chooseColor(e){
    color = e.target.style.background
    dropBox.style.display = 'none'
    colorPlace.style.background = color
};

function drawing(){
    c.beginPath();
    c.arc(mouse_position.x, mouse_position.y - topBar.offsetHeight, size, 0, Math.PI * 2, false);
    c.fillStyle = color;
    c.fill();
};

function animate(){
    requestAnimationFrame(animate);
    if(is_drawing){
        drawing();
    };
};
animate();
fillColors();