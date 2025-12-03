// create map and centre on London
var map = L.map('map').setView([51.5074, -0.1278], 13);
// add OpenStreetMap basemap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: '© OpenStreetMap contributors'
// }).addTo(map);
L.tileLayer('https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}{r}.png?apikey={apikey}', {
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            apikey: 'a1a36fd41cba4a0ca1d1a0ba6143abb9',
            maxZoom: 22
        }).addTo(map);
// add markers to map
L.marker([51.588068, -0.070589]).addTo(map).bindPopup(`
  <h3>Post Bar</h3>
  <p>Post Bar is cultural centre and music venue offering space for creative projects and cooperative organising.</p>
  <p>Home of the London School of Solarpunk.</p>
`);