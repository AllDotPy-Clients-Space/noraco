import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from '../../widgets/contact-form/contact-form.component';
import { MatDialog, DialogPosition } from '@angular/material/dialog';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    constructor(
        private modalService: NgbModal,
        private dialog: MatDialog,
        private ntdialog: DialogService
    ){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }

    // OPEN APPS MODAL
    openContactFormModal(event:any){
        window.scrollTo({
            'top': 0
        })
        // document.body.style.overflow = 'hidden';
        const dialogRef = this.ntdialog.open(ContactFormComponent, {
            width: 'auto',
            height: 'auto',
            closeButton: true,
            data: this
            // panelClass: 'bg-white shadow-lg rounded-lg',
          });

        dialogRef.backdropClick$.subscribe(() => {
            console.log('Backdrop has been clicked');
        });
        dialogRef.afterClosed$.subscribe((result) => {
            document.body.style.overflow = 'auto'
            console.log(`After dialog has been closed ${result}`);
        });
    }
}
