import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { NewItemComponent } from './inventory/new-item/new-item.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'newitem', component: NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
