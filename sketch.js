function setup() {
    createCanvas(500, 500);
    background(60);
  }
  
  function draw() {
   
    stroke("white");
    fill("blue")
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
    rect(mouseX, mouseY, 100, 100);
    }
  
  }