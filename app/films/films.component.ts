import { Component, OnInit } from '@angular/core';
import { IFilm } from '../film';
import { FactoryFilmsService } from '../factory-films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  public films : IFilm[];
  constructor(private _factoryFilmsService : FactoryFilmsService) { }

  ngOnInit() {
  	this._factoryFilmsService.getFilms().subscribe(data => this.films = data);
  }

  addFavor(event : Event){
  	var t = event.originalTarget.innerText;
  	console.log(t);
  	for(var i=0; i<this.films.length; i++){
  		if(this.films[i].Title === t){
  			this._factoryFilmsService.addFilmToFavor(this.films[i]);
  		}
  	}
	
  }

}
