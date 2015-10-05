// date object, set interval, convert to hex value (remove ':')
(function() {

// Find the time
  // Find current time
  var hexCode;
  var bigFunction = function() {
    var currentTime = new Date ();
    // Grab different pieces of time
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();


    // Make it a 12-hr clock
    var twelveHrHours = (currentHours > 12) ? currentHours - 12: currentHours;
    // console.log(twelveHrHours);


    // Make all pieces double digit
    var ddHours = (twelveHrHours < 10) ? '0' + twelveHrHours: twelveHrHours;
    // console.log(ddHours);
    var ddMinutes = (currentMinutes < 10) ? '0' + currentMinutes: currentMinutes;
    // console.log(ddMinutes);
    var ddSeconds = (currentSeconds < 10) ? '0' + currentSeconds: currentSeconds;
    // console.log(ddSeconds);


    // Piece them together
    hexCode = '#' + ddHours + ddMinutes + ddSeconds;
    var clockDisplay = $('#clock').text(hexCode);
    // console.log(clockDisplay);

    
  }
  bigFunction();
  window.setInterval(bigFunction, 1000);



  var bkgdColor = function () {
    $('body').css('background-color', hexCode);
    $('#clock').css('color', 'white');
  }

  bkgdColor();
  window.setInterval(bkgdColor, 2000)
  
















})();

  // var dog = function() {console.log('dog');}
  // var dog2 = console.log('dog');
  // var currentTime = new Date ();


  // var resetTime = function () {
  //   return new Date ();
  // }
  // var currentTime = window.setInterval(function () {
    // return new Date ()}, 1000);




    // var clockDisplay = document.querySelector('#clock');
    // var textNode = document.createTextNode(wholeTime);
    // clockDisplay.appendChild(textNode);



  // $('.wrapper').css('background-color', 'red');


  // window.setInterval(aFunctionToChangeBkgrdColorTo'hexCode', 2000); // Every 2 secs
  // $('#wrapper').css('background-color', hexCode);


  // var finalClock = window.setInterval(wholeTime, 500);

  // DOM stuff
  // var clockDisplay = document.querySelector('#clock');
  // var textNode = document.createTextNode(wholeTime);
  // clockDisplay.appendChild(textNode);
  


// Refresh the time
  // var finalClock = window.setInterval(currentTime, 1000);







