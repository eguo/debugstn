var noble = require('noble');

noble.on('stateChange', function(state) {
  console.log("state: " + state);
  if (state === 'poweredOn') {
    noble.startScanning([], true);
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
  console.log(peripheral)
});
