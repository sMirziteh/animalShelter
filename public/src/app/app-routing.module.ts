import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { ShelterComponent } from './shelter/shelter.component';

const routes: Routes = [
  {path: 'pets/new', component: NewComponent},
  {path: 'pets/:id', component: DetailsComponent},
  {path: 'pets/edit/:id', component: ShelterComponent},
  {path: 'pets', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: '/pets'},
  {path: '**', redirectTo: '/pets'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
