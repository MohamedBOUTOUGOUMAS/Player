import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilm } from './film';
import { Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class FactoryFilmsService {

  constructor(private http: HttpClient) {}
 				
	public favoris = [];


  	getTmpFilms() : Observable<IFilm[]>{
		return this.http.get<IFilm[]>("/assets/data/films.json");
	}

	getFavoris (){
		return this.favoris;
	}

	addFilmToFavor (film){
		this.favoris.push(film);
		return this.favoris;
	}

	removeFilmFromFavo(title){
		for( var i = 0; i < this.favoris.length; i++){ 
		   if ( this.favoris[i].Title == title) {
		     	this.favoris.splice(i, 1);
		   }
		}
	}

}
