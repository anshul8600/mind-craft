canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
blockwidth=30;
blockheight=30;
var player="";
var blockimg="";
function player_update()
{
fabric.Image.fromURL("player.png", function(Img)
{
player=Img;
player.scaleToWidth(150);
player.scaleToHeight(150);
player.set({
    top:playerY, left:playerX
});
canvas.add(player);
}
);
}
function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img)
{
    blockimg=Img;
blockimg.scaleToWidth(blockwidth);
blockimg.scaleToHeight(blockheight);
blockimg.set({
top:playerY, left:playerX
});
canvas.add(blockimg);
}
);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);
if(e.shiftKey==true && keypress=='80')
{
console.log("p & shift");
blockwidth=blockwidth+10;
blockheight=blockheight+10;
document.getElementById("current_width").innerHTML=blockwidth;
document.getElementById("current_height").innerHTML=blockheight;
}
if(e.shiftKey==true && keypress=='77')
{
console.log("m & shift");
blockwidth=blockwidth-10;
blockheight=blockheight-10;
document.getElementById("current_width").innerHTML=blockwidth;
document.getElementById("current_height").innerHTML=blockheight;
}
if(keypress=='38')
{
up();
console.log("up");
}
if(keypress=='40')
{
down();
console.log("down");
}
if(keypress=='37')
{
left();
console.log("left");
}
if(keypress=='39')
{
right();
console.log("right");
}
if(keypress=='87')
{
new_image('wall.jpg');
console.log("W");
}
if(keypress=='71')
{
new_image('ground.png');
console.log("g");
}
if(keypress=='76')
{
new_image('light_green.png');
console.log("l");
}
if(keypress=='84')
{
new_image('trunk.jpg');
console.log("t");
}
if(keypress=='82')
{
new_image('roof.jpg');
console.log("r");
}
if(keypress=='89')
{
new_image('yellow_wall.png');
console.log("y");
}
if(keypress=='68')
{
new_image('dark_green.png');
console.log("d");
}
if(keypress=='85')
{
new_image('unique.png');
console.log("u");
}
if(keypress=='67')
{
new_image('cloud.jpg');
console.log("c");
}
}
function up(){
    if(playerY >= 0){
        playerY=playerY-10;
        canvas.remove(player);
        player_update();
    }
}

function down(){
    if(playerY <= 500){
        playerY=playerY+10;
        canvas.remove(player);
        player_update();
    }
}

function left(){
    if(playerX >= 0){
        playerX=playerX-10;
        canvas.remove(player);
        player_update();
    }
}

function right(){
    if(playerX <= 850){
        playerX=playerX+10;
        canvas.remove(player);
        player_update();
    }
}
