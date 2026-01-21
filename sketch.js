let img1, img2, img3 ;


let s0, s1, s2;

function preload() {
  s0 = loadSound("loose.mp3");

}
function setup() {
  createCanvas(windowWidth, windowHeight );
    img1 = loadImage("eh.png") ;
  
  s0.play()
}

function draw() {
  background("black");
   image(img1, 0, 0, windowWidth/2, windowHeight)
  fill("white")
  text("Loose yourself was the #1 song on my birthday, December 10th, 2002. Some of its lyrics are still mentioned today and were even more so a few years ago.", 800, 500, 300)
  textSize(30)
}

function mouseReleased() {

  s0.pause();

  
}

