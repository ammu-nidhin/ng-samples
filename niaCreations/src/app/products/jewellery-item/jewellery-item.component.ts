import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JewelleryList } from '../jewelleryList.model';
import { JewelListService } from '../services/jewel-list.service';

@Component({
  selector: 'app-jewellery-item',
  templateUrl: './jewellery-item.component.html',
  styleUrls: ['./jewellery-item.component.css']
})
export class JewelleryItemComponent implements OnInit {

  name:string;
  jewelItem:JewelleryList;
  constructor(private route:ActivatedRoute,private jewelleryService:JewelListService) { }

  ngOnInit() {
   this.name=this.route.snapshot.params['id'];
   this.jewelItem=this.jewelleryService.getJwelleryItem();
  }

}
