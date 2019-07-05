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
    this.films = this._factoryFilmsService.getFilms();
  }

  addFavor(elm : any){
  	var t = elm.childNodes[0].data;
    var s = t.substr(0,t.length-1);
    elm.style="background-color: #e1e1e1";
    for(var i=0; i<this.films.length; i++){
      if(this.films[i].Title === s){
        this._factoryFilmsService.addFilmToFavor(this.films[i]);
      }
    }
  }
    

  addFilms(elm : any){
    this.nonDisplay = true;
    this.display = false;
    var t = elm.innerText;
    for(var i=0; i<this.tmpFilms.length; i++){
      if(this.tmpFilms[i].Title === t){
        this._factoryFilmsService.addFilmToFilms(this.tmpFilms[i]);
      }
    }
    this.films = this._factoryFilmsService.getFilms();
  }

  showFilms(){
    this.nonDisplay = false;
    this.display = true;
  }

  hideFilms(){
    this.nonDisplay = true;
    this.display = false;
  }

  isFavori(title){
    var nbFav = this._factoryFilmsService.getNbFavoris();
    if( nbFav == 0){
      return true;
    }
    var bool = this._factoryFilmsService.isFavori(title);
    return !bool;
  }


}
