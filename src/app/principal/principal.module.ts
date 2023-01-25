import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularesComponent } from './populares/populares.component';
import { DescargadosComponent } from './descargados/descargados.component';
import { ProximamenteComponent } from './proximamente/proximamente.component';
import { AgregarComponent } from './agregar/agregar.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		PopularesComponent,
		DescargadosComponent,
		ProximamenteComponent,
		AgregarComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		PopularesComponent,
		DescargadosComponent,
		ProximamenteComponent,
		AgregarComponent,
		HomeComponent
	]
})
export class PrincipalModule { }
