import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormulaireCapteurComponent } from './formulaire-capteur/formulaire-capteur.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ConsultationCapteurComponent } from './consultation-capteur/consultation-capteur.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireCapteurComponent,
    ConsultationCapteurComponent,
    PageAcceuilComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    TextInputAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
