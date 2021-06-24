const onvif = require('node-onvif');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
	xaddr: 'http://192.168.0.101:8080/onvif/device_service',
	user : 'USERNAME',
	pass : 'PASSWD'
});

// Initialize the OnvifDevice object
let maxZoom = function(){
	device.init().then(() => {
		// Move the camera
		return device.ptzMove({
			'speed': {
				z: 1.0  // Speed of zoom (in the range of -1.0 to 1.0)
			},
			'timeout': 1 // seconds
		});
	}).then(() => {
		console.log('Done!');
	}).catch((error) => {
		console.error(error);
	})
};

setInterval(maxZoom, 5000);