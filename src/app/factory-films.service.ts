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
	public films = [];

  	getTmpFilms() : Observable<IFilm[]>{
		return this.http.get<IFilm[]>("/assets/data/films.json");
	}

	getFavoris (){
		return this.favoris;
	}

	getFilms(){
		return this.films;
	}

	addFilmToFavor (film){
		this.favoris.push(film);
		return this.favoris;
	}

	addFilmToFilms(film){
		this.films.push(film);
		return this.films;
	}

	removeFilmFromFavo(title){
		for( var i = 0; i < this.favoris.length; i++){ 
		   if ( this.favoris[i].Title == title) {
		     	this.favoris.splice(i, 1);
		   }
		}
	}
	removeFilmFromFilms(title){
		for( var i = 0; i < this.films.length; i++){ 
		   if ( this.films[i].Title == title) {
		     	this.films.splice(i, 1);
		   }
		}
	}

}
