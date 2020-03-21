import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './tasks/tasks';


const routes: Routes = [
  {path: 'task', component: ProductListComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ProductListComponent]
