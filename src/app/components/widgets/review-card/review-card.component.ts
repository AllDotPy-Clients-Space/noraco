import { Component, Input } from '@angular/core';
import { Review } from 'src/app/shared/models/review';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {

    @Input()
    reveiw?: Review

    constructor(){}
}
