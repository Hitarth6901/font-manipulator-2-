function setup(){
    Canvas=createCanvas(550,500)
    Canvas.position(560,100)

    video=createCapture(VIDEO)
    video.size(550,500)
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}   
function modelloaded(){
    console.log("Posenet is intialized")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
    leftwristx=results[0].pose.leftWrist.x
    rightwristx=results[0].pose.rightWrist.x
difference=floor(leftwristx-rightwristx)}
    
}