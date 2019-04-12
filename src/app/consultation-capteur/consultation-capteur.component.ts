 import { Component, OnInit } from '@angular/core';
import { Capteur } from '../capteur';
//import { StockCapteur } from '../stock-capteur';
import { Location } from '@angular/common';
import { FormulaireCapteurComponent } from '../formulaire-capteur/formulaire-capteur.component';
import * as L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CapteurService} from '../capteur.service'; 

@Component({
  selector: 'app-consultation-capteur',
  templateUrl: './consultation-capteur.component.html',
  styleUrls: ['./consultation-capteur.component.css']
})
export class ConsultationCapteurComponent implements OnInit {
  suppr: Capteur;
  //capteur =  StockCapteur;
  modifier: boolean;
  information: Capteur;
  myfrugalmap: any;
  voir: boolean;
  formControlValue = "";
  resultat: any;
  test: Capteur[];
  
 


  myControl = new FormControl();
  options: Capteur[];
  filteredOptions: Observable<Capteur[]>;
 

  constructor(private capteurService: CapteurService) { 
  
  }

  ngOnInit() {

     this.getCapteur();
    
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myfrugalmap = L.map('frugalmap').setView([36.752500000000055, 3.041970000000049], 1);
    L.control.scale().addTo(this.myfrugalmap);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
    }).addTo(this.myfrugalmap);

    
    for(var i = 0; i <= this.test.length; i++){
    const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    iconSize: [ 25, 41 ],
    iconAnchor: [ 12, 41 ],
    popupAnchor:[ 0, -41 ],
    });
    L.marker([this.test[i].longitude, this.test[i].latitude], {icon: myIcon}).bindPopup(this.test[i].nom).addTo(this.myfrugalmap).openPopup();

    console.log("ajouter le marqueur pour capteur "+this.test[i].nom);

    }
    
  }

  flyto(nom){
    this.voir = true;
     console.log("The map nae is -> "+ L.map.name +  " ----> "+this.myfrugalmap.name);
      for (var i = 0; i <= this.test.length; i++){
        if (this.test[i].nom == nom){
      this.myfrugalmap.setView([this.test[i].longitude, this.test[i].latitude], 12);
      }
    }
  
  }

  findChoices(searchText: string): string[] {

    var filterValue = searchText.toLowerCase();    
    return [this.information.nom].filter(item => item.toLowerCase().includes(filterValue)); 
   
  }

  getChoiceLabel(choice: string) {
    return `@${choice} `;
    console.log("affiche : "+choice);
  }
 

  supprimer(nom) {
    console.log("le capteur à supprimer est : "+ nom);
    for(var i = 0; i <= this.test.length; i++){
        console.log("vérification avec élément: : "+ this.test[i].nom);
        console.log("la taille est "+ this.test.length);
      if (this.test[i].nom === nom){
        this.test.splice(i, 1);
      }
    }
    
  }

  modification(){
    this.modifier = true;
  }

  getCapteur() {
    this.capteurService.getCapteur()
    .subscribe(data => this.test = data);
        
  }

}
