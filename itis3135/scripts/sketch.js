function setup() {
    let cnv = createCanvas(800, 600);
    cnv.parent('canvas-container');
    background(255);
    noStroke();
  }  
  
function drawFlower(x, y) {
    push(); 
    translate(x, y); 
    let petals = 8;
    let radius = 15;
    let petalColor = color(random(255), random(255), random(255), 150);
  
    fill(petalColor);
    for (let i = 0; i < petals; i++) {
      ellipse(0, radius, 20, 60); 
      rotate(TWO_PI / petals);   
    }
  
    fill(255, 204, 0); 
    ellipse(0, 0, 20, 20);
  
    pop(); 
}

function draw() {
    if (mouseIsPressed) {
        drawFlower(mouseX, mouseY);
    }
}
  