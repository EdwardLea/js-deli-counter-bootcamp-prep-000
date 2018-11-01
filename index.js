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
  var msg;
  if(katzDeliLine.length >= 1){
  msg = "The line is currently: ";
  for (var i = 0; i < katzDeliLine.length; i++){
    msg +=  i+1 + ". " + katzDeliLine[i] +", ";
  }
  msg = msg.substring(0, msg.length-1);
  } else{
    msg = "The line is currently empty.";
  }
  return msg;
};