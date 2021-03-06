import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'inventory', component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
