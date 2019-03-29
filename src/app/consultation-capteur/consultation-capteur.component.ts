import { Component, OnInit } from '@angular/core';
import { Capteur } from '/Users/relesse/Documents/angular-camera/src/app/capteur';
import { StockCapteur } from '/Users/relesse/Documents/angular-camera/src/app/stock-capteur';
import { Location } from '@angular/common';
import { FormulaireCapteurComponent } from '/Users/relesse/Documents/angular-camera/src/app/formulaire-capteur/formulaire-capteur.component';
import * as L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';

@Component({
  selector: 'app-consultation-capteur',
  templateUrl: './consultation-capteur.component.html',
  styleUrls: ['./consultation-capteur.component.css']
})
export class ConsultationCapteurComponent implements OnInit {
	suppr: Capteur;
	capteur = StockCapteur;
  modifier: boolean;
  information: Capteur;
  myfrugalmap: any;
  voir: boolean;
  formControlValue = '';
  resultat: any;

	constructor() { 
  }

	ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
    L.control.scale().addTo(this.myfrugalmap);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
    }).addTo(this.myfrugalmap);

    //Methode de recherche de ville avec pointeur
    var searchControl = new ELG.Geosearch().addTo(this.myfrugalmap);

    var results = new L.LayerGroup().addTo(this.myfrugalmap);

     searchControl.on("results", function(data) {
       console.log("ici");
      results.clearLayers();
        for (let i = data.results.length - 1; i >= 0; i--) {
          results.addLayer(L.marker(data.results[i].latlng));
        }
      });
     
      //Methode récupérer la position d'un capteur ave sa longitude et latitude

    for(var i = 0; i <= this.capteur.length; i++){
    const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    iconSize: [ 25, 41 ],
    iconAnchor: [ 12, 41 ],
    popupAnchor:[ 0, -41 ],
    });
    L.marker([this.capteur[i].longitude, this.capteur[i].latitude], {icon: myIcon}).bindPopup(this.capteur[i].nom).addTo(this.myfrugalmap).openPopup();

    console.log("ajouter le marqueur pour capteur "+this.capteur[i].nom);
    }
  }
  
  flyto(nom){
    this.voir = true;
     console.log("The map nae is -> "+ L.map.name +  " ----> "+this.myfrugalmap.name);
      for (var i = 0; i <= this.capteur.length; i++){
        if (this.capteur[i].nom == nom){
      this.myfrugalmap.setView([this.capteur[i].longitude, this.capteur[i].latitude], 12);
      }
    }
  
  }

  findChoices(searchText: string) {

    const filterValue = searchText.toLowerCase();
    for(var i = 0; i <= this.capteur.length; i++){
      this.resultat = this.capteur[i].nom.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
      }
    } 

  getChoiceLabel(choice: string) {
    return choice;
  }
  

  supprimer(nom) {
    console.log("le capteur à supprimer est : "+ nom);
    for(var i = 0; i <= this.capteur.length; i++){
        console.log("vérification avec élément: : "+ this.capteur[i].nom);
        console.log("la taille est "+ this.capteur.length);
      if (this.capteur[i].nom === nom){
        this.capteur.splice(i, 1);
      }
    }
  }

  modification(){
    this.modifier = true;
  }


}
