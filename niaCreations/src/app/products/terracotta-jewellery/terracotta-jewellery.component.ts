import { Component, OnInit } from '@angular/core';
import {JewelListService} from '../services/jewel-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JewelleryList } from '../jewelleryList.model';

@Component({
  selector: 'app-terracotta-jewellery',
  templateUrl: './terracotta-jewellery.component.html',
  styleUrls: ['./terracotta-jewellery.component.css']
})

export class TerracottaJewelleryComponent implements OnInit {
  
   terrajewel:JewelleryList[];
   isDataLoaded:boolean=false;
   constructor(private router:Router,private routes:ActivatedRoute,private jewelListservice:JewelListService) {
  }

  ngOnInit() {
    this.terrajewel=this.jewelListservice.getTerracottaJewellery();
  }
  
  onClick(i:number){
    console.log(i);
    this.router.navigate(['../jewellery-item',this.terrajewel[i].name],{relativeTo:this.routes});
    this.jewelListservice.setJwelleryItem(this.terrajewel[i]);
  }
}
