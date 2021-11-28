import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';


const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: 'collection', component: CollectionComponent },
  { path: '**', component:  HomeComponent } // temporarily
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
