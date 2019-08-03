import { Component, OnInit,Inject } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
  panelOpenstate: false;
  nombreColumna: string[];

  constructor(public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data.id);
    this.nombreColumna = Object.keys(this.data);
    console.log(this.nombreColumna);
  }
  onNoclik(){
    this.dialogRef.close();
  }

}
