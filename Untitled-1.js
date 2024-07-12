var myImage = document.getElementById('myImage');
var IdleImageNumber = 1;
var idleani = 0;

function idleAnimation() {
    IdleImageNumber++;
    if (IdleImageNumber == 10) {
        IdleImageNumber = 1;
    }
    myImage.src = "Idle (" + IdleImageNumber + ").png";
}

function IdleAnimationStart() {
    idleani = setInterval(idleAnimation, 200);
}

var RunImageNumber = 1;
var Runaninumber = 0;

function runanimation() {
    RunImageNumber++;
    if (RunImageNumber == 11) {
        RunImageNumber = 1;
    }
    myImage.src = "Run (" + RunImageNumber + ").png";
}

function Runstart() {
    clearInterval(idleani);
    Runaninumber = setInterval(runanimation, 100);
}

function keycheck(event) {
    var keycode = event.which;
    if (keycode == 13) { // Enter key
        if (Runaninumber == 0) {
            Runstart();
        }
        if (backmoveId == 0) {
            backmoveId = setInterval(backmove, 100);
        }
        if (boxanimationId == 0) {
            boxanimationId = setInterval(boxanimation, 100);
        }
    }
    if (keycode == 32) { // Space key
        if (jumpaninumber == 0) {
            jumpanistart();
        }
        if (backmoveId == 0) {
            backmoveId = setInterval(backmove, 100);
        }
        if (boxanimationId == 0) {
            boxanimationId = setInterval(boxanimation, 100);
        }
    }
}

var backgroundPositionX = 0;
var backmoveId = 0;
var score = 0;

function backmove() {
    backgroundPositionX -= 20;
    document.getElementById("bg").style.backgroundPositionX = backgroundPositionX + "px";
    score++;
    document.getElementById("score").innerHTML = score;
}

var jumpimagenumber = 1;
var jumpaninumber = 0;
var myImageMarginTop = 307;

function jumpanimation() {
    jumpimagenumber++;

    if (jumpaninumber <= 6) {
        myImageMarginTop -= 20;
        myImage.style.marginTop = myImageMarginTop + "px";
    }

    if (jumpimagenumber >= 7) {
        myImageMarginTop += 20;
        myImage.style.marginTop = myImageMarginTop + "px";
    }

    if (jumpaninumber == 11) {
        jumpaninumber = 1;
        clearInterval(jumpanimation);
        jumpaninumber = 0;
        RunImageNumber = 0;
        Runstart();
    }

    myImage.src = "Jump (" + jumpimagenumber + ").png";
}

function jumpanistart() {
    clearInterval(idleani);
    clearInterval(Runaninumber);
    jumpaninumber = setInterval(jumpanimation, 100);
}

var boxMarginLeft = 1040;

function createbox() {
    for (var i = 0; i <= 10; i++) {
        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("img").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";
        box.id = "box" + i;

        if (i < 5) {
            boxMarginLeft += 1000;
        } else {
            boxMarginLeft += 500;
        }
    }
}

var boxanimationId = 0;

function boxanimation() {
    for (var i = 0; i < 10; i++) {
        var box = document.getElementById("box" + i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 25;
        box.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= 110 && newMarginLeft <= 100) {
            if (myImageMarginTop > 300) {
                clearInterval(boxanimationId);
                clearInterval(Runaninumber);
                Runaninumber = -1;
                clearInterval(jumpaninumber);
                jumpaninumber = -1;
                clearInterval(backmoveId);
                backmoveId = -1;
                deathanimation = setInterval(boydeathanimation, 100);
            }
        }
    }
}

var deaimagenumber = 1;
var deathanimation = 0;

function boydeathanimation() {
    deaimagenumber++;
    if (deaimagenumber == 11) {
        deaimagenumber = 10;
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = score;
    }
    myImage.src = "Dead (" + deaimagenumber + ").png";
}

function reload() {
    location.reload();
}
