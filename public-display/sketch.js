let socket = io();

let info = "todavia no hay nada"
let selection = [];
let InterReg, InterLight, InterBold, AmericanCheese,BBQRibs,BellPepper,CheedarCheese,ChickenStrips,ChipotleSauce,GarlicSauce,HoneySauce
, IconCheck,Jalapeño, Jam,Lettuce,MayonnaiseSauce, MozzarellaCheese, MustardSauce,Onion, OreganoBread,Pickle, ProvoneCheese, Salami
,Sandwich1, SubwayLogo,Subway1,Subway2,Tomato,Tuna,Turkey,WhiteBread,WholeBread;
function preload() {
  //Fonts
  InterReg = loadFont('/assets/fonts/static/Inter-Regular.ttf');
  InterLight = loadFont('/assets/fonts/static/Inter-Light.ttf');
  InterBold = loadFont('/assets/fonts/static/Inter-Bold.ttf');
  //Img
  AmericanCheese = loadImage('/assets/imgs/american_cheese.png');
  BBQRibs = loadImage('/assets/imgs/BBQ_ribs.png');
  BBQSauce = loadImage('/assets/imgs/BBQ_sauce.png');
  BellPepper = loadImage('/assets/imgs/bell_pepper.png');
  CheedarCheese = loadImage('/assets/imgs/cheedar_cheeese.png');
  ChickenStrips = loadImage('/assets/imgs/chickenS.png');
  ChipotleSauce = loadImage('/assets/imgs/chipotle_sauce.png');
  GarlicSauce = loadImage('/assets/imgs/garlic_sauce.png');
  HoneySauce = loadImage('/assets/imgs/honey_sauce.png');
  IconCheck = loadImage('/assets/imgs/icon_check.png');
  Jalapeño = loadImage('/assets/imgs/jalapeño.png');
  Jam = loadImage('/assets/imgs/jam.png');
  Lettuce = loadImage('/assets/imgs/lettuce.png');
  MayonnaiseSauce = loadImage('/assets/imgs/mayonnaise_sauce.png');
  MozzarellaCheese = loadImage('/assets/imgs/mozzarella_cheese.png');
  MustardSauce = loadImage('/assets/imgs/mustard_sauce.png');
  Onion = loadImage('/assets/imgs/onion.png');
  OreganoBread = loadImage('/assets/imgs/oregano_bread.png');
  Pickle = loadImage('/assets/imgs/pickle.png');
  ProvoneCheese = loadImage('/assets/imgs/provone_cheese.png');
  Salami = loadImage('/assets/imgs/salami.png');
  Sandwich1 = loadImage('/assets/imgs/sandwich1.png');
  SubwayLogo = loadImage('/assets/imgs/Subway_png_logo.png');
  Subway1 = loadImage('/assets/imgs/Subway_png1.png');
  Subway2 = loadImage('/assets/imgs/Subway_png2.png');
  Tomato = loadImage('/assets/imgs/tomato.png');
  Tuna = loadImage('/assets/imgs/tuna.png');
  Turkey = loadImage('/assets/imgs/turkey.png');
  WhiteBread = loadImage('/assets/imgs/white_bread.png');
  WholeBread = loadImage('/assets/imgs/whole_bread.png');
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