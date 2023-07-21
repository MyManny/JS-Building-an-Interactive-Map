//Note: You do NOT need to create an external JS file for this project despite any instructions you may see in Canvas. This file, app.js, is the only external JS file you need.
// Create map:                                                       
var map = L.map('map').setView([51.505, -0.09], 13);
// Add OpenStreetMap tiles:
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create and add a geolocation marker:
var marker = L.marker([51.5, -0.09]).addTo(map);


var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var latlngs = [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]
var polygon = L.polygon(latlngs).addTo(map);

// var map = L.map('map').setView([51.505, -0.09], 13);

// // Create map                                                       
// const myMap = L.map('map', {
//     center: [48.868672, 2.342130],
//     zoom: 12,
// });





// // Add openstreetmap tiles

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


// //Note: Replace 'https://.tile.openstreetmap.org///.png' with 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' in this copy/paste part in the Canvas activity instructions


// // Create and add a geolocation marker
// const marker = L.marker([48.87007, 2.346453])
// marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()



// // Draw the 2nd arrondissement




// // Metro station markers




// // Create red pin marker
