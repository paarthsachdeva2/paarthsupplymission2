class box{
    constructor(x,y,width,height){
      var option={
          restitution:1,
          
      }
     this.object=Bodies.rectangle(x,y,width,height,option)
     
     this.width=width;
     this.height=height
     World.add(world,this.object)
  
    }
  
    display(){
       var position=this.object.position 
       
       rectMode(CENTER);
       fill("red");
       rect(0,0,this.width,this.height);
       
  
  
  
    }
  
  
  
  }