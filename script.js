myImage = document.getElementById('myImage');

IdleImageNumber = 1;
idleani = 0;

function idleAnimation() {
    IdleImageNumber = IdleImageNumber + 1;

    if (IdleImageNumber == 10) {
        IdleImageNumber = 1;
    }

    myImage.src = "Idle (" + IdleImageNumber + ").png";
}

function IdleAnimationStart() {
    idleani  = setInterval(idleAnimation, 200);
}

RunImageNumber=1;
Runaninumber=0;

function runanimation(){

    RunImageNumberImageNumber = RunImageNumberImageNumber + 1;

    if (RunImageNumberImageNumber == 11) {
        RunImageNumberImageNumber = 1;
    }



    myImage.src = "Run (" + RunImageNumber + ").png"
    

}



function Runstart(){

    Runaninumber  = setInterval(Runstart, 100);
    clearInterval(IdleAnimationStart)
}

function keycheck(event){
    alert(event.which);

    var keycode=event.which;
    if(keycode==13){
        if(runanimation==0){
           Runstart();
        }
        if(backmoveId==0){
            backmoveId=setInterval(backmove,100);
    }
    if(boxanimationId =0){
        boxanimationId=setInterval(boxanimation,100)
    }




    
    }
    if(keycode==32){
        if(jumpaninumber==0){
            jumpanistart();
        }
        if(backmoveId==0){
            backmoveId=setInterval(backmove,100);
        }
        if(boxanimationId =0){
        boxanimationId=setInterval(boxanimation,100)
        }
  

    }
    
}


var backgroundPositionX=0;
var backmoveId=0;
var score =0;



function backmove(){

backgroundPositionX=backgroundPositionX-20;
document.getElementById("bg").style.backgroundPositionX=backgroundPositionX+"px"
score=score+1;
document.getElementById("score").innerHTML=score;



}
jumpimagenumber=1;
jumpaninumber=0;
myImageMarginTop=307;



function jumpanimation(){

    jumpaninumber=jumpaninumber+1

    if(jumpaninumber<=6){
        myImage=myImageMarginTop-20;
        myImage.style.MarginTop=myImageMarginTop+"px";

    }


    if(jumpimagenumber>=7){

      myImageMarginTop=myImageMarginTop+20;
      myImage.style.MarginTop=myImageMarginTop+"px";

    }

    if(jumpaninumber==11){
        jumpaninumber=1;
        clearInterval(jumpanimation);
        jumpaninumber=0;
        RunImageNumber=0;
        Runstart();
    }

    myImage="Jump ("+jumpimagenumber+").png";

}


function jumpanistart(){
    clearInterval(idleani);
    RunImageNumberImageNumber=0;
    clearInterval(Runaninumber);
    jumpaninumber=setInterval(jumpanimation,100);
}


boxMarginLeft=1040;

function createbox(){

 for(var i=0;i<=10;i++){}

    var box = document.createElement("div");
    box.className="box";
    document.getElementById("img").appendChild(box);
    box.style.margin=boxMarginLeft+"px";
     box.id="box"+i;

    //boxMarginLeft=boxMarginLeft+1500;


    if(i<5){
        boxMarginLeft=boxMarginLeft+1000;
    }
    if(i>=5){
        boxMarginLeft=boxMarginLeft+500;
    }

}

var boxanimationId=0;
function boxanimation(){
    for(var i=0; i<10;i++){

        var box =document.getElementById("box" +i);
        var currentMarginLeft=getComputedStyle(box).marginLeft;
        var newMargineLeft=parseInt(currentMarginLeft)-25;
        box.style.marginLeft=newMargineLeft+"px";

        if(newMargineLeft>=110 & newMargineLeft<=100){


            if(myImageMarginTop>300){
                clearInterval=(boxanimationId);
        
                clearInterval(Runaninumber);
                Runaninumber=-1;
        
                clearInterval(jumpaninumber);
                jumpaninumber= -1;
        
                clearInterval(backmoveId);
                backmoveId=-1;
                
                deathanimation=setInterval(boydeathanimation,100);

        
        
            }

    }
}


    deaimagenumber=1
    deathanimation=0


    function boydeathanimation(){
        deaimagenumber=deaimagenumber+1;
        
        if(deaimagenumber==11){
            deaimagenumber =10;
            document.getElementById("end").style.visibility="visible";
            document.getElementById("end score").innerHTML=score

        }

        myImage.src="Dead ("+ deaimagenumber +").png";

    }
        
function reload(){

    location.reload();


}


    }


