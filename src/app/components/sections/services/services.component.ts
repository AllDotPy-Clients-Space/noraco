import { Component } from '@angular/core';
import { ServiceInfo } from 'src/app/shared/models/serviceInfo';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

    services?: ServiceInfo[] = [
        {
            'title': 'Community Management',
            'icon': 'hgi-stroke hgi-user-group',
            'description': 'Développez une communauté engagée et fidélisez vos audiences.'
        },
        {
            'title': 'Social Media',
            'icon': 'hgi-stroke hgi-tiktok',
            'description': 'Créez des campagnes percutantes sur vos plateformes préférées.'
        },
        {
            'title': 'Conseil en Stratégie Digitale',
            'icon': 'hgi-stroke hgi-finger-access',
            'description': ' Identifiez les opportunités et atteignez vos objectifs grâce à une approche personnalisée.'
        },
        {
            'title': 'Communication et Marketing Digital',
            'icon': 'hgi-stroke hgi-megaphone-02',
            'description': 'Positionnez votre marque en leader sur son marché.'
        },
        {
            'title': 'SEO et SEA',
            'icon': 'hgi-stroke hgi-traffic-light',
            'description': 'Optimisez votre visibilité et attirez du trafic qualifié.'
        },
        {
            'title': "Stratégie d'influence",
            'icon': 'hgi-stroke hgi-time-schedule',
            'description': 'Connectez-vous à des influenceurs pertinents pour toucher votre audience.'
        },
    ]

    constructor(){}

}
