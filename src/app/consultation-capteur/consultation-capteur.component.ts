import { Component, OnInit } from '@angular/core';
import { Capteur } from '/Users/relesse/Documents/angular-camera/src/app/capteur';
import { StockCapteur } from '/Users/relesse/Documents/angular-camera/src/app/stock-capteur';
import { Location } from '@angular/common';
import { FormulaireCapteurComponent } from '/Users/relesse/Documents/angular-camera/src/app/formulaire-capteur/formulaire-capteur.component';
import * as L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-consultation-capteur',
  templateUrl: './consultation-capteur.component.html',
  styleUrls: ['./consultation-capteur.component.css']
})
export class ConsultationCapteurComponent implements OnInit {
	suppr: Capteur;
	capteur = StockCapteur;
  modifier: boolean;
  information: string[];
  myfrugalmap: any;
  voir: boolean;
  formControlValue = '';
  resultat: any;

	constructor() { 
  }

	ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myfrugalmap = L.map('frugalmap').setView([36.752500000000055, 3.041970000000049], 1);
    L.control.scale().addTo(this.myfrugalmap);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
    }).addTo(this.myfrugalmap);

    
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
/*
  findChoices(searchText: string): string[] {

    const filterValue = searchText.toLowerCase();
    for(var i = 0; i <= this.capteur.length; i++){
      if (searchText == this.capteur[i].nom){
      return [this.capteur[i].nom].filter(item => item.toLowerCase().includes(filterValue));
      }
    }   
  } 

  getChoiceLabel(choice: string) {
    return choice;
    console.log("affiche : "+choice);
  }
 */

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

  filtre() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
