import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { BookingComponent } from '../booking/booking.component';
import { ManagebookingComponent } from '../managebooking/managebooking.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

    
  }

 
  openDialog()
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '800px' ;
    dialogConfig.minWidth = '800px' ;
    
    this.dialog.open(BookingComponent, dialogConfig)
    {};
  }

  openDialogm()
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '600px' ;
    dialogConfig.minWidth = '800px' ; 
    
    this.dialog.open(ManagebookingComponent, dialogConfig)
    {};
  }
 
}

