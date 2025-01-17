import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    constructor(
        // @Inject(MAT_DIALOG_DATA) public data: any
    ){}

    // closeDialog(): void {
    //     this.dialogRef.close('Result from dialog');
    //   }
}
