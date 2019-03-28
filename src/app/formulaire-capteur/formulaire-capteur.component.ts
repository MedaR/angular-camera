import { Component, OnInit } from '@angular/core';
import { Capteur } from '/Users/relesse/Documents/angular-camera/src/app/capteur';
import { StockCapteur } from '/Users/relesse/Documents/angular-camera/src/app/stock-capteur';
import { Location } from '@angular/common';

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
  }

  ajouter() {
    this.capteur.push(this.nv_capteur);
    console.log(this.nv_capteur);
  	this.rajouter = false;
    console.log("la taille du tableau est : "+this.capteur.length);
  }
}
