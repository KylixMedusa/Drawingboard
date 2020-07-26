let isDrawing = false;
let x = 0;
let y = 0;
let color = "black";

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');
const colorpicker = document.getElementById("input--color");
const resetbtn = document.getElementById("reset");
const eraser = document.getElementById("eraser");
const size = document.getElementById("size");
// event.offseontext, event.offsetY gives the (x,y) offset from the edge of the PicsmyPics.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
x = e.offsetX;
y = e.offsetY;
isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        context.save();
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle= color;
    context.lineWidth = size.value;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

colorpicker.addEventListener('change', e=>{
    color  = colorpicker.value;
})
resetbtn.addEventListener('click',e=>{
    context.clearRect(0, 0, myPics.width, myPics.height);
})
eraser.addEventListener('click',e=>{
    color = "white";
})
colorpicker.addEventListener('focus',e=>{
    color = colorpicker.value;
})

	