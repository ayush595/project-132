cocossddddbro= "";
status= "";
image1= "";

function preload() {
    image1= loadImage("eih.jpg");
}
function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();

    cocossddddbro= ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("staus").innerHTML= "Detecting objects";

}
function modelloaded() {
    console.log("model is loded mam/sir");
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
                
    }
    
}