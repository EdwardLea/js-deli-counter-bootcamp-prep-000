var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name);
  var queueLength = katzDeliLine.length;
  return "Welcome, " + name +". You are number " + queueLength +" in line.";
};

var nowServing = function(katzDeliLine){
  var lineOutput;
  if (katzDeliLine.length >= 1){
    lineOutput = "Currently serving " + katzDeliLine[0] +".";
    katzDeliLine.shift();
  } else {
    lineOutput = "There is nobody waiting to be served!";
  }
  return lineOutput;
};

var currentLine = function(katzDeliLine){
  var msg = "";
  for (var i = 0; i < katzDeliLine.length; i++){
    msg += "The line is currently: " + i + "." + katzDeliLine[i] ;
  }
  return msg;
};