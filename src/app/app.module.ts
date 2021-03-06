import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormulaireCapteurComponent } from './formulaire-capteur/formulaire-capteur.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ConsultationCapteurComponent } from './consultation-capteur/consultation-capteur.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { ImageUpload } from 'vue-image-upload-resize';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';
import {CapteurService} from './capteur.service'; 

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
    ReactiveFormsModule,
    AppRoutingModule,
    TextInputAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFileUploadModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
