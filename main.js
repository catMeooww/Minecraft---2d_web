var canvas = new fabric.Canvas("minecraftCanvas");
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_object);
    })
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        image_object = Img;
        image_object.scaleToWidth(block_image_width);
        image_object.scaleToHeight(block_image_height);
        image_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(image_object);
    })
}
playerUpdate();

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {

    keyPressed = e.keyCode;
    console.log("key =" + keyPressed);
    if (keyPressed == '38') {
        up();
    }
    if (keyPressed == "40") {
        down();
    }
    if (keyPressed == "37") {
        left();
    }
    if(keyPressed == "39"){
        right();
    }
    if(e.shiftKey == true && keyPressed == 80){
        console.log("p e shift foram pressionados juntos");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("largura").innerHTML = block_image_width;
        document.getElementById("altura").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == 77){
        console.log("m e shift foram pressionados juntos");
        block_image_width = block_image_width - 10;
        block_image_height =block_image_height - 10;
        document.getElementById("largura").innerHTML = block_image_width;
        document.getElementById("altura").innerHTML = block_image_height;
    }
    if(keyPressed == 77){
        newImage("wood.jpg");
        console.log("m");
    }
    if(keyPressed == 85){
        newImage("Glowstone.png");
        console.log("u");
    }
    if(keyPressed == 68){
        newImage("grama dark.png");
        console.log("d");
    }
    if(keyPressed == 76){
        newImage("Grama lateral.jpg");
        console.log("l");
    }
    if(keyPressed == 71){
        newImage("grama topo.png");
        console.log("g");
    }
    if(keyPressed == 82){
        newImage("netherrack.jpg");
        console.log("r");
    }
    if(keyPressed == 80){
        newImage("Pedra Minecraft.jpg");
        console.log("p");
    }
    if(keyPressed == 67){
        newImage("Tijolos Pedra Minecraft.jpg");
        console.log("c");
    }
    if(keyPressed == 84){
        newImage("tijolos.jpg");
        console.log("t");
    }

}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("autura da imagem do bloco = " + block_image_height);
        console.log("Quando a tecla direcional Cima for pressionada, X =  " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function down() {
    if (player_y <= 550) {
        player_y = player_y + block_image_height;
        console.log("autura da imagem do bloco = " + block_image_height);
        console.log("Quando a tecla direcional Baixo for pressionada, X =  " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("largura da imagem do bloco = " + block_image_width);
        console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function right(){
    if(player_x <= 950){
        player_x = player_x + block_image_width;
        console.log("largura da imagem do bloco = " + block_image_width);
        console.log("Quando a tecla direcional Direita for pressionada, X =  " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}