import { Component, OnInit } from '@angular/core';
import { IFilm } from '../film';
import { FactoryFilmsService } from '../factory-films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  public display = false;
  public nonDisplay = true;
  public tmpFilms : IFilm[];
  public films : IFilm[] = [];
  constructor(private _factoryFilmsService : FactoryFilmsService) { }

  ngOnInit() {
  	this._factoryFilmsService.getTmpFilms().subscribe(data => this.tmpFilms = data);
  }

  addFavor(elm : any){
  	var t = elm.innerText;
    elm.style="background-color: #e1e1e1";
  	for(var i=0; i<this.films.length; i++){
  		if(this.films[i].Title === t){
  			this._factoryFilmsService.addFilmToFavor(this.films[i]);
  		}
  	}
  }

  addFilms(elm : any){
    var t = elm.innerText;
    for(var i=0; i<this.tmpFilms.length; i++){
      if(this.tmpFilms[i].Title === t){
        this.films.push(this.tmpFilms[i]);
      }
    }
  }

  showFilms(){
    this.nonDisplay = false;
    this.display = true;
  }

  hideFilms(){
    this.nonDisplay = true;
    this.display = false;
  }


}
