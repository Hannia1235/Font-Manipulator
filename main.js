function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "differnce = " + difference);
    }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}

function draw()
{
    background('#OE4D92');

    document.getElementById("font_size").innerHTML = "Size of the Font will be: " + difference + "px";
    fill('#3ba880');
    textSize(difference)
    text("Hannia", 50, 400);
}


difference = 0;
rightWristX = 0;
leftWristX = 0;

