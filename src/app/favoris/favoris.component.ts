import { Component, OnInit } from '@angular/core';
import { FactoryFilmsService } from '../factory-films.service';
import { MatDialog } from '@angular/material';
import { IFilm } from '../film';
import { FenetreModalComponent } from '../fenetre-modal/fenetre-modal.component';
@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {


  public favoris = [];

  constructor(private _factoryFilmsService : FactoryFilmsService, public dialog: MatDialog) { }

  ngOnInit() {

  	this.favoris = this._factoryFilmsService.getFavoris();
  	
  }

  openDialog(obj : IFilm): void {
    const dialogRef = this.dialog.open(FenetreModalComponent, {
      height: '1000px',
      width: '500px',
      data: {title: obj.Title, desc: obj.Plot, image: obj.Images[0]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  removeFav(title){
	this._factoryFilmsService.removeFilmFromFavo(title.substr(0, title.length-1));
  }
}
