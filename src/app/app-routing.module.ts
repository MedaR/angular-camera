import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationCapteurComponent } from './consultation-capteur/consultation-capteur.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { FormulaireCapteurComponent} from './formulaire-capteur/formulaire-capteur.component';

const routes: Routes = [
	{path: '', redirectTo: '/accueil', pathMatch: 'full' },
	{path: 'accueil', component: PageAcceuilComponent },
	{path: 'consultation', component: ConsultationCapteurComponent },
	{path: 'formulaire', component: FormulaireCapteurComponent },
	
	];
	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

