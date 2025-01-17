import { Component } from '@angular/core';
import { WorkInfo } from 'src/app/shared/models/workInfo';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

    works?: WorkInfo[] = [
        {
            title: 'Optimisation SEO',
            company: 'AllDotPy Inc.',
            desciption: 'Une campagne Instagram ayant atteint 500 000 impressions en 1 mois une campagne publicitaire internationale avec un ROI de 400%.',
            image: 'assets/images/work0.jpg',
            reverse: '-reverse'
        },
        {
            title: 'Réseaux sociaux',
            company: 'AllDotPy Inc.',
            desciption: 'Une campagne Instagram ayant atteint 500 000 impressions en 1 mois une campagne publicitaire internationale avec un ROI de 400%.',
            image: 'assets/images/work1.jpg',
            reverse: ''
        },
        {
            title: 'Strategie de Branding',
            company: 'AllDotPy Inc.',
            desciption: 'Une campagne Instagram ayant atteint 500 000 impressions en 1 mois une campagne publicitaire internationale avec un ROI de 400%.',
            image: 'assets/images/hero3.jpg',
            reverse: '-reverse'
        },
    ]
    constructor(){}
}
