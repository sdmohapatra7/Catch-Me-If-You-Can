var box = document.getElementById("box");
// box.style.top="50px"
box.style.top = Math.floor(Math.random() * 50).toString() + "px";
console.log(box.style.top);
box.style.left = Math.floor(Math.random() * 50).toString() + "px";
console.log(box.style.left);

box.addEventListener('mousemove',function(){
    let viewport_height=window.innerHeight;
    console.log('viewport_height',viewport_height);
    let viewport_width=window.innerWidth;
    console.log('viewport_width',viewport_width);
    let box_width=box.clientWidth;
    console.log('box_width',box_width);
    let box_height=box.clientHeight;
    console.log('box_height',box_height);
    box.style.top=Math.floor(Math.random()*(viewport_height-box_height)).toString()+"px";
    box.style.left=Math.floor(Math.random()*(viewport_width-box_width)).toString()+"px";
});

//       another approach......

/* 
var box = document.getElementById("box");

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;


// Updates the viewport height and width dynamically
window.addEventListener("resize", function(event) {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});



box.addEventListener("mouseover", function(event) {
    var boxAttr = box.getBoundingClientRect();
    
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});



function getNewPosition(boxWidth, boxHeight) {
    
    // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
    var newX = Math.floor((Math.random() * viewWidth) + 1 - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight) + 1 - boxHeight);

    // These will satisfy that box does not move go out in the top and left direction
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
}

*/