import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {

  mform: FormGroup = this.mformBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    id: ['', Validators.required]
  });

  constructor(
    private mformBuilder: FormBuilder,
    private mdialogRef: MatDialogRef<ManagebookingComponent>
  ) { }

  ngOnInit(): void {
  }

  submit(mform: any) {

    this.mdialogRef.close(`${mform.value.id}`);
    console.log(mform.value.id);
  
  }
}
