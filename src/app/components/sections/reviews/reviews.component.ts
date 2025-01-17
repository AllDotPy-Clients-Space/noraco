import { Component } from '@angular/core';
import { Review } from 'src/app/shared/models/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

    reviews?: Review[] = [
        {
            name: 'Jean-François',
            content: "Noraco Agency a su comprendre nos besoins et nous proposer une stratégie digitale parfaitement adaptée. Leur équipe est réactive, professionnelle et force de proposition. Grâce à eux, nous avons atteint nos objectifs de visibilité en un temps record.",
            position: 'PDG de Valoria',
            profile: ''
        },
        {
            name: 'Ralph Tépé',
            content: "Leur expertise en community management et réseaux sociaux a fait toute la différence. Nous avons vu notre engagement augmenter de manière significative, et nos campagnes publicitaires ont surpassé nos attentes. Merci à toute l'équipe !",
            position: 'CTO de Alltoo',
            profile: ''
        },
        {
            name: 'Adolé Emmanuella',
            content: "Collaborer avec Noraco Agency a été un vrai plaisir. Leur créativité et leur compréhension de notre secteur nous ont permis de renforcer notre image de marque et d’atteindre un public plus large.",
            position: 'Responsable Communication',
            profile: ''
        },
    ]

    constructor(){}
}
