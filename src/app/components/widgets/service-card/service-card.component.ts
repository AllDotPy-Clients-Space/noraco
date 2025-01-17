import { Component, Input } from '@angular/core';
import { ServiceInfo } from 'src/app/shared/models/serviceInfo';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {

    @Input()
    infos?: ServiceInfo

    constructor(

    ){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}
