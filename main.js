//Create Map View
var mapView = new ol.View({
    center: ol.proj.fromLonLat([104.8320113,16.4262288]),
    zoom: 5.97
});

var map = new ol.Map({
    target: 'map',
    view: mapView
});

// Get OpenStreetMap Tile
var osmTile = new ol.layer.Tile({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
})

map.addLayer(osmTile);

// Get VietNamTile from Geoserver
var VietNamTile = new ol.layer.Tile({
    title: 'Viet Nam Province',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/VietNamGis/wms',
        params: 
        {
            'LAYERS': 'VietNamGis:vietnam_provinces_gis',
            'TILED': true,
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(VietNamTile)