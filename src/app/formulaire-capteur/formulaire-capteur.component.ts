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
  myfrugalmap: any;
  latlng = L.latLng(this.nv_capteur.latitude, this.nv_capteur.longitude);
  //stock: Array<Capteur> = [];

  constructor() { 

    this.rajouter = true;
  }

  ngOnInit() {

    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
    L.control.scale().addTo(this.myfrugalmap);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
    }).addTo(this.myfrugalmap);

    var searchControl = new ELG.Geosearch().addTo(this.myfrugalmap);
    /*
    const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    iconSize: [ 25, 41 ],
    iconAnchor: [ 12, 41 ],
    popupAnchor:[ 0, -41 ],
    });   
    var coor = searchControl.LatLng([this.nv_capteur.latitude, this.nv_capteur.longitude]); 
    L.marker([this.nv_capteur.longitude, this.nv_capteur.latitude], {icon: myIcon}).bindPopup(this.nv_capteur.nom).addTo(this.myfrugalmap).openPopup();

*/

   // var results = new L.LayerGroup().addTo(this.myfrugalmap);
/*
      searchControl.on('results', function(data) {

      results.clearLayers();
        for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng)); 
        var nv_cap = new Capteur; 
        this.nv_capteur.latitude = data.results[i].latlng.lat; 
        console.log("affiche : "+this.nv_capteur.latitude);
      }
    });
  */}

  ajouter() {
    this.capteur.push(this.nv_capteur);
    console.log(this.nv_capteur);
  	this.rajouter = false;
    console.log("la taille du tableau est : "+this.capteur.length);
  }

}
