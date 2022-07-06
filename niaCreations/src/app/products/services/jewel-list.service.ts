import { Injectable } from '@angular/core';
import {mockData} from '../mock-data';
import {JewelleryList} from '../jewelleryList.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JewelListService {
   
  //private jewelleydetails=new Subject<any>();
  jewelleryItem:JewelleryList;
  constructor() { 
 }
 
 getTerracottaJewellery():JewelleryList[]{
    return mockData;
    //console.log(this.mockData);
   }

  setJwelleryItem(item:JewelleryList){
    this.jewelleryItem=item;
  }
  
  getJwelleryItem():JewelleryList{
    return this.jewelleryItem;
  }



}
