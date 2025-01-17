import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from 'ng-angular-popup';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule,
    NgToastModule,
    // NgbModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    // {
    //     provide: NgbConfig,
    //     useValue: {
    //         container: '#ngb-modals'
    //     }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
