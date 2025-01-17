import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../widgets/contact-form/contact-form.component';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(
        private dialog: MatDialog,
        private ntdialog: DialogService
    ){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }

    // HAMBURGER MENU TOGGLER
    toggleMenu(){
        let menu = document.getElementById('menu')!;

        document.body.classList.toggle('open');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex')
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
