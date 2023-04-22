interface mappable {
  location: mapboxgl.LngLatLike;
}

class CustomMap {
  private mapBox: mapboxgl.Map;
  private marker: mapboxgl.Marker;

  constructor(containerId?: string) {
    this.mapBox = new mapboxgl.Map({
      container: containerId ? containerId : 'map', // container ID
      accessToken:
        'pk.eyJ1IjoieW9oYW5lczIxIiwiYSI6ImNsZ3FtbG4wcTBmeTkzZ21zdno2OW9ydDEifQ.QBjZZ40vPUm6Rjz0hgNAwQ',
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: { lng: 38.9, lat: 9.2 }, // starting position [lng, lat]
      zoom: 4, // starting zoom
    });
  }

  addMarker(mappable: mappable): void {
    this.marker = new mapboxgl.Marker();
    this.marker.setLngLat(mappable.location);
    this.marker.addTo(this.mapBox);
  }
}

export default CustomMap;
