import { Component, Input } from '@angular/core';
import { WorkInfo } from 'src/app/shared/models/workInfo';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent {

    // @Input()
    // reverse?: string = ''
    @Input()
    info?: WorkInfo

    constructor(){}
}
