Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_formate:'png',
    png_quality:'100'
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function Snaps(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="cap_img" src="'+ data_uri +'"/>'
    });
}

console.log("Version : ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cJacly-gN/", modelloaded);

function modelloaded() {
    console.log("Loaded!!!!!!");
}

function Speak() {
    var synth = window.speechSynthesis;

    Speak_data1 = "The Prediction 1 is" + Prediction_1;
    Speak_data2 = "The Prediction 2 is" + Prediction_2;

    var utterthis = new SpeechSynthesisUtterance(Speak_data1 + Speak_data2);

    synth.speak(utterthis);
}