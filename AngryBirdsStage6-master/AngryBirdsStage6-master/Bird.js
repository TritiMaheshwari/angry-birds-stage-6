class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");

    this.array1=[]
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

 

    
   if(this.body.velocity.x>0 && this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y]
    this.array1.push(position);
   }
   for(var i=0;i<this.array1.length;i++){
  image(this.image2,this.array1[i][0],this.array1[i][1]);
   }
   
  // array1=[[10,20],[30,40],[50,60]]
    super.display();
  }
}
