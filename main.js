canvas=document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
nasa_img_array=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
background_image=nasa_img_array[random_number];
console.log("Background image is =" +background_image);
rover_image="rover.png";
rover_x=15;
rover_y=15;
rover_width=100;
rover_height=90;

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypress=e.keyCode;
    console.log(keypress);

if (keypress=="38") {
    up();
    console.log("Up");
}
if (keypress=="40") {
    down();
    console.log("Down");
}
if (keypress=="37") {
    left();
    console.log("Left");
}
if (keypress=="39") {
    right();
    console.log("Right");
}
}
function up() {
    if (rover_y>=0) {
        rover_y -=10;
        console.log ("When up arrow is pressed= x="+ rover_x +"y="+ rover_y );
        uploadbackground();
        uploadrover();        
    }
}
function down() {
    if (rover_y<=500) {
        rover_y +=10;
        console.log ("When down arrow is pressed= x="+ rover_x +"y="+ rover_y );
        uploadbackground();
        uploadrover();        
    }
}
function left() {
    if (rover_x>=0) {
        rover_x -=10;
        console.log ("When left arrow is pressed= x="+ rover_x +"y="+ rover_y );
        uploadbackground();
        uploadrover();        
    }
}
function right() {
    if (rover_x<=700) {
        rover_x +=10;
        console.log ("When right arrow is pressed= x="+ rover_x +"y="+ rover_y );
        uploadbackground();
        uploadrover();        
    }
}