import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

 

  form: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', Validators.pattern('[- +()0-9]{6,}')],
    adress: ['', Validators.required],
    inOutDate: ['', Validators.required]
    //releasedAt: [new Date(), Validators.required]
    //picker: [new Date(), Validators.required]
    //checkIn: [new Date(), Validators.required],
    //checkOut: [new Date(), Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<BookingComponent>
  ) {}

  ngOnInit() {
    
  }

 submit(form: any) {

  this.dialogRef.close(`${form.value}`);
  console.log(form.value);

}

}
