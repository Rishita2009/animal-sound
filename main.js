function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Tbvr1Z2Fl/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}