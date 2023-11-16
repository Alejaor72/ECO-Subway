let socket = io();

let info = "todavia no hay nada"
let selection = [];

function preload() {
  //Fonts
  InterReg = loadFont('/assets/fonts/static/Inter-Regular.ttf');
  InterLight = loadFont('/assets/fonts/static/Inter-Light.ttf');
  InterBold = loadFont('/assets/fonts/static/Inter-Bold.ttf');
  //Img
  //tetrisImg = loadImage('/assets/imgs/tetris.png');
  //Music
  //SFX
}

function setup() {
    frameRate(60)
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0, 10)
    console.log(info)
}

socket.on('confirmation', (data) => {
    info = data
})