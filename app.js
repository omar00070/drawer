//selectors
const canvas = document.querySelector('canvas');
const topBar = document.querySelector('.top-bar');
const dropBox = document.querySelector('.colors-container');

//global vars
const topBarHeight = topBar.offsetHeight;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - topBarHeight;

console.log(topBarHeight)

//event listeners


//functions
function dropDown(){
    if(dropBox.style.display === 'none'){
        dropBox.style.display = 'grid';
    }else{
        dropBox.style.display = 'none';
    }
    console.log(dropBox.style.display)
};