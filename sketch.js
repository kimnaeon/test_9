// tilt and rotation for enabled devices
// on a desktop nothing will happen, but it wont break
// variables allow motion and ios to be detected.
// further code to detect a compass and tilt hardware on non-ios devices needed

let motion = false;
let ios = false;

// below code is essential for ios13 and above. 
// A click is needed for the device to request permission 
if (typeof DeviceMotionEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function() {
    DeviceMotionEvent.requestPermission()
      .then(function() {
        console.log('DeviceMotionEvent enabled');

        motion = true;
        ios = true;
      })
      .catch(function(error) {
        console.warn('DeviceMotionEvent not enabled', error);
      })
  })
} else {
  // we are not on ios13 and above
  // todo
  // add detection for hardware for other devices
  // if(got the hardware) {
  // motion = true;
  // }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(rotationX,rotationY,rotationZ);
}

function draw() {
  fill(255)

  // we can use rotationZ, rotationX and rotationY
  // they should be used in this order (apparently - see docs)
  // even though default mode is radians the Z rotation returns degrees unless converted

  // the below code ensures a smooth transition from 0-180 and back
  let zMotion = round(width / 5 * abs(radians(rotationZ) - PI))
  // x and y values moved from the centre point
  let yMotion = round(height / 2 + rotationX * 10)
  let xMotion = round(width / 2 + rotationY * 10)

  // motion affected circle
  circle(xMotion, yMotion, zMotion)
  // reference circle
  stroke(255)
  strokeWeight(3)
  noFill()
  noStroke();

  // text to provide instructions and
  // document values at the top of the screen

}