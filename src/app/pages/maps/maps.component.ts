import { Component, OnInit } from '@angular/core';

import { latLng, MapOptions, tileLayer, Map, Marker, icon } from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  map: Map;
  mapOptions: MapOptions;

  options = [
    { lat: -1.4587143, long: -48.4733022 },
    { lat: -1.458532, long: -48.4816492 },
    { lat: -1.4606878, long: -48.4898031 },
    { lat: -1.4651979, long: -48.4981477 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(-1.4562099, -48.4539212),
      zoom: 12,
      layers: [
        tileLayer(
          'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors',
          }
        ),
      ],
    };
  }

  private addSampleMarker() {
    this.options.map((data) => {
      let marker = new Marker([data.lat, data.long]).setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.svg',
        })
      );
      marker.addTo(this.map);
    });
  }
}
