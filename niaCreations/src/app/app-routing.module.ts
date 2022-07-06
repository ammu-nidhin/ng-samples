import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { TerracottaJewelleryComponent } from './products/terracotta-jewellery/terracotta-jewellery.component';
import { SilkThreadJewelleryComponent } from './products/silk-thread-jewellery/silk-thread-jewellery.component';
import {JewelleryItemComponent} from './products/jewellery-item/jewellery-item.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'products',component:TerracottaJewelleryComponent},
  {path:'products/terracotta',component:TerracottaJewelleryComponent},
  {path:'products/silkThread',component:SilkThreadJewelleryComponent},
  {path:'products/jewellery-item/:id',component:JewelleryItemComponent},
  {path: '',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
