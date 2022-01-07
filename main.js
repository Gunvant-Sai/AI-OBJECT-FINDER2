var video = "";
var status1 = "";

function setup() 
{
    canvas = createCanvas(480,480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function Start(){
    objectdecter = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("Op").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1=true;
}

function draw() {
    image(video,0,0,580,480);
}