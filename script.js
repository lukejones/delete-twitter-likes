////////////////////////////////////////////////////////////////////////////////
// Copy and paste into your Console

////////////////////////////////////////////////////////////////////////////////
// Manage the interval and run count.
function setIntervalX(callback, delay, repetitions) {
  var intervalCounter = 0;
  var intervalID = window.setInterval(function () {
    callback();
    if (++intervalCounter === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

////////////////////////////////////////////////////////////////////////////////
// Core process that runs the core un-like process 900 times with 1 second delays.
// And does so every 15 minutes for 10 times.
setIntervalX(function () {
  setIntervalX(function () {
    var divs = document.getElementsByTagName('div')
    var arr = Array.prototype.slice.call(divs)
    var hearts = arr.filter(x => x.getAttribute('data-testid') == 'unlike')
    hearts.forEach(h => h.click())
    window.scrollTo(0, document.body.scrollHeight ||document.documentElement.scrollHeight);
  }, 1000, 900);
}, 900000, 10);
