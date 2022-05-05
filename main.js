mustacheX = 0;
mustacheY = 0;
function preload(){
    mustache = loadImage('https://i.postimg.cc/pVZ2Lnj3/m.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses)
}

function modeloaded(){
    console.log('Posenet Is Initialized');
}

function gotPoses(results){
  if(results.length > 0){
      console.log(results);
      console.log("mustache x = " + results[0].pose.mustache.x);
      console.log("mustache y = " + results[0].pose.mustache.y);
      console.log("mustache x = " + mustacheX);
      console.log("mustache y = " + mustacheY);
      console.log("mustache x = " + results[0].pose.mustache.x);
      console.log("mustache y = " + results[0].pose.mustache.y);
  }
}
 
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}   