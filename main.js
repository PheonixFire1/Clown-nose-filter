nose_x=0;
nose_y=0;

function preload()
{
    tint_color="";
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup()
{
    canvas=createCanvas(550,500);
    canvas.position(710,300);
    Webcam=createCapture(VIDEO);
    Webcam.hide();
    posenet=ml5.poseNet(Webcam,modelLoaded);
    posenet.on('pose',gotResults)
}
function draw()
{
    image(Webcam,0,0,550,500);
    tint(tint_color);
    image(clown_nose,nose_x,nose_x,30,30)
}

function ApplyFilter()
{
    tint_color=document.getElementById("FilterInput").value;
}

function TakeSnapshot()
{
    save('My Snapshot.png');
}

function modelLoaded()
{
    console.log("Model Loaded")
}

function gotResults(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x-80;
        nose_y=results[0].pose.nose.y-200;
        console.log(nose_x);
        console.log(nose_y);
    }
}