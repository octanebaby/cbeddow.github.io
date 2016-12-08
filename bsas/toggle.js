var toggleableLayerIds = [ 'Temperature', 'Tree Density', 'Vegetation', 'Mapillary', 'Tree Images' ];
var colors = ['#221fb7', '#117302', '#ffff80', '#35af6d', 'magenta'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
    var col = colors[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = '';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';

        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
