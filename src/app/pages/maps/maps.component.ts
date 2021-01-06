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
  positions: [
    {
      first: {
        longitude: -1.4562099;
        latitude: -48.4539212;
      };

      second: {
        longitude: -1.4498984;
        latitude: -48.4658982;
      };

      third: {
        longitude: -1.4498984;
        latitude: -48.4658982;
      };

      four: {
        longitude: -1.4548463;
        latitude: -48.4588649;
      };
    }
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
    let marker = new Marker([-1.4562099, -48.4539212]).setIcon(
      icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.svg',
      })
    );

    let marker2 = new Marker([-1.4498984, -48.4658982]).setIcon(
      icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.svg',
      })
    );

    let marker3 = new Marker([-1.4552822, -48.4556163]).setIcon(
      icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.svg',
      })
    );

    let marker4 = new Marker([-1.4548463, -48.4588649]).setIcon(
      icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.svg',
      })
    );

    marker.addTo(this.map);
    marker2.addTo(this.map);
    marker3.addTo(this.map);
    marker4.addTo(this.map);
  }
}
