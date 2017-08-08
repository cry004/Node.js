const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodeAddress = encodeURIComponent(address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
  json: true
  },(error,response,body) => {
    if(error) {
      callback('error occured');
      //console.log('error occured');  //system error cant not connect to the server.
    } else if (body.status === 'ZERO_RESULTS'){
      callback('unable to find the address');  //input error
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  })

};


module.exports.geocodeAddress = geocodeAddress;
