noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550)

canvas = createCanvas(550,550);
canvas.position (590,140);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('PoseNet se ha inicializado');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY =" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log ("leftWristX =" +leftWristX + "rightWristX = "+ rightWristX +"difference = " + difference );
    }


}

function Draw(){
    background('#72CFF5');
    document.getElementById("square_side").innerHTML = "El ancho y el alto es " + difference;
    fill("#42DBAC");
    stroke("5EE84B");
    square( noseX , noseY, difference);
}

