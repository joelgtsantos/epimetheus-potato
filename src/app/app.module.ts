import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { NewItemComponent } from './inventory/new-item/new-item.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { InventoryService } from './inventory/inventory.service';
import { ItemListComponent } from './inventory/item-list/item-list.component';
import { reducers } from './app.reducer';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ItemListComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
