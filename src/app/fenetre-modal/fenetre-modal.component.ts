import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  desc: string;
  image : string;
}


@Component({
  selector: 'app-fenetre-modal',
  templateUrl: './fenetre-modal.component.html',
  styleUrls: ['./fenetre-modal.component.scss']
})
export class FenetreModalComponent implements OnInit {

	public title;
	public desc;
	public image;

  constructor( public dialogRef: MatDialogRef<FenetreModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  	this.title = this.data.title;
  	this.desc = this.data.desc;
  	this.image = this.data.image;
  }

}
