const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

var encodeAddress = encodeURIComponent(argv. address) || '08822';
var gocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`

axios.get(gocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location. lng;
  const key = 'bc7a152279d4a80190ebd34af944fb2c';
  var weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((resp) => {
  var temperature = resp.data.currently.temperature;
  var apparentTemperature = resp.data.currently.apparentTemperature;
  console.log(`temperature: ${temperature}. apparentTemperature: ${apparentTemperature}.`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message)
  }
});
