const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=e7b8f9bbbfc42bbd507db444ffbbc62e&units=metric')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });




 const requests = require ("requests");

 requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=e7b8f9bbbfc42bbd507db444ffbbc62e&units=metric')
 .on('data', function (chunk) {
  console.log(chunk)
 })
 .on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
 
   console.log('end');
 });
