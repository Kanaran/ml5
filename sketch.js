// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/bird2.jpg');
}

function setup() {
  createCanvas(1280, 740);
  
  image(img, 0, 0);
  classifier.classify(img, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv('Label: ' + results[0].label);
    createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
  }
}