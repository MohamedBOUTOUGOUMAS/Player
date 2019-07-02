import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FavorisComponent } from './favoris/favoris.component';
const routes: Routes = [
	{ path: 'films', component: FilmsComponent},
	{ path: 'favoris', component : FavorisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FilmsComponent, FavorisComponent]