import { Component, OnInit } from '@angular/core';
import { Capteur } from '/Users/relesse/Documents/angular-camera/src/app/capteur';
import { StockCapteur } from '/Users/relesse/Documents/angular-camera/src/app/stock-capteur';
import { Location } from '@angular/common';
import * as L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-formulaire-capteur',
  templateUrl: './formulaire-capteur.component.html',
  styleUrls: ['./formulaire-capteur.component.css']
})
export class FormulaireCapteurComponent implements OnInit {
	
  capteur = StockCapteur;
	rajouter: boolean;
	nv_capteur = new Capteur;
	selecte: Capteur;
  //stock: Array<Capteur> = [];

  constructor() { 

    this.rajouter = true;
  }

  ngOnInit() {

    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    var myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
    L.control.scale().addTo(myfrugalmap);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
    }).addTo(myfrugalmap);

    var searchControl = new ELG.Geosearch().addTo(myfrugalmap);

    var results = new L.LayerGroup().addTo(myfrugalmap);
    
    searchControl.on("results", function(data) {
      results.clearLayers();
      for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }

  ajouter() {
    this.capteur.push(this.nv_capteur);
    console.log(this.nv_capteur);
  	this.rajouter = false;
    console.log("la taille du tableau est : "+this.capteur.length);
  }
}
