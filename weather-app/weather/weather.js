const request = require('request');
const yargs = require('yargs');
// const geocode = require ('./geocode/geocode');

const key = 'bc7a152279d4a80190ebd34af944fb2c';

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
    json: true
    }, (error,resp,body) => {
      if(!error && resp.statusCode === 200){
        callback(undefined,{
          'Temperature': body.currently.temperature,
          'apparentTemperature': body.currently.apparentTemperature
        });
      }else {
        callback('Unable to fetch weather.')
      }
  });
};

module.exports.getWeather = getWeather;
