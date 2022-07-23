# Openlayer_Practice
- To create new map for your application:
```
new ol.Map({
    target: 'map', <!-- Your id map-->
    view: new ol.View({
        center: ol.proj.fromLonLat([,]),  <!-- Lat Lon at your area-->
        zoom:
    })
})
```
- To add Open Street Map in your map:
```
var osmTile = new ol.layer.Tile({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
});

map.addLayer(osmTile);
```

- To add your GeoSerVer Tile in your map:
```
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

map.addLayer(VietNamTile);
```
