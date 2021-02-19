//**MAPA*/
var boxIcon = L.icon({
    iconUrl: '../img/gps.svg',
    shadowUrl: '../img/gpsombra.svg',
    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    shadowAnchor: [15, 32],  
    popupAnchor:  [-1, -26] 
});
var map = L.map('mapa').setView([6.23086, -75.58971], 15);
var gl = L.mapboxGL({
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  style: 'https://api.maptiler.com/maps/b9b0e2d2-48c1-41a4-a288-2a62f995b2b8/style.json?key=6UcVmwMdiEk6kTiZaZub'
}).addTo(map);
L.marker([6.2290253176121695, -75.59019173069133],{icon: boxIcon}).addTo(map)
    .bindPopup('Sede central de<br> <span class="letras_rojas">ABK</span>.')
    .openPopup()
    .bindTooltip('disfruta la estancia')
    .openTooltip();

map.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Te encuentras a " + radius + " metros de este punto").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);