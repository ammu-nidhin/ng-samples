import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TerracottaJewelleryComponent } from './products/terracotta-jewellery/terracotta-jewellery.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SilkThreadJewelleryComponent } from './products/silk-thread-jewellery/silk-thread-jewellery.component';
import { JewelleryItemComponent } from './products/jewellery-item/jewellery-item.component';
//import { TerracottaJewelleryComponent } from './Products/terracotta-jewellery/terracotta-jewellery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TerracottaJewelleryComponent,
    HomeComponent,
    ProductsComponent,
    TerracottaJewelleryComponent,
    SilkThreadJewelleryComponent,
    JewelleryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
