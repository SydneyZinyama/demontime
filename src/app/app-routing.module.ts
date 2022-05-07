import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './userrole/add/add.component';
import { ShowComponent } from './userrole/show/show.component';

const routes: Routes = [
  
  {path: '', component: ShowComponent },
  
  {path: 'showuserroles', component: ShowComponent },

  {path: 'adduserrole', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
