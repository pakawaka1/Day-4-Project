const airplane = 'airplane';
const train = 'train';
var october1 = 'October 1';
var october7 = 'October 7';
var september1 = 'September 1';
var september7 = 'September 7';


var transMode = prompt('For your vacation, would you like to travel via airplane or by train?');
console.log(transMode);

  if(airplane){
    prompt('Are you traveling on October 1 or October 7?');
  }
  else {
    prompt('Are you traveling on September 1 or September 7');
  }

if (airplane == 'October 1'){
  alert('Your destination is Barcelona!!! Enjoy some paella for me!');
}

else if ('October 7'){
  alert('Your destination is London!!!!! Please have a tall pint of Ipswich for me!');
}

if ('September 1'){
  alert('Your destination is Seattle!  Make sure to take an umbrella with you!');
}

if ('September 7'){
  alert('Your destination is San Diego!  Enjoy the sunny weather!!');
}
