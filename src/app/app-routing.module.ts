import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationCapteurComponent } from '/Users/relesse/Documents/angular-camera/src/app/consultation-capteur/consultation-capteur.component';
import { PageAcceuilComponent } from '/Users/relesse/Documents/angular-camera/src/app/page-acceuil/page-acceuil.component';
import { FormulaireCapteurComponent} from '/Users/relesse/Documents/angular-camera/src/app/formulaire-capteur/formulaire-capteur.component';

const routes: Routes = [
	{path: '', redirectTo: '/acceuil', pathMatch: 'full' },
	{path: 'acceuil', component: PageAcceuilComponent },
	{path: 'consultation', component: ConsultationCapteurComponent },
	{path: 'formulaire', component: FormulaireCapteurComponent },
	
	];
	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

