import { Component, OnInit } from '@angular/core';
import { FactoryFilmsService } from '../factory-films.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {


  public favoris = [];
  constructor(private _factoryFilmsService : FactoryFilmsService) { }

  ngOnInit() {

  	this.favoris = this._factoryFilmsService.getFavoris();
  	
  }

}
