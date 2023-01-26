import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './principal/home/home.component';
import { PopularesComponent } from './principal/populares/populares.component';
import { DescargadosComponent } from './principal/descargados/descargados.component';
import { ProximamenteComponent } from './principal/proximamente/proximamente.component';
import { AgregarComponent } from './principal/agregar/agregar.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'populares', component: PopularesComponent },
	{ path: 'descargados', component: DescargadosComponent },
	{ path: 'proximamente', component: ProximamenteComponent, },
	{ path: 'agregar', component: AgregarComponent, },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
