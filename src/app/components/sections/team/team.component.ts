import { Component } from '@angular/core';
import { Member } from 'src/app/shared/models/member';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

    members?: Member[] = [
        {
            name: 'Noémie Couasnon',
            position: 'CEO • Fondatrice',
            profile:'assets/images/avatars/avatar-0.jpg'
        },
        {
            name: 'Wilfried GOEH',
            position: 'Architecte Logiciel',
            profile:'assets/images/avatars/avatar-1.jpg'
        },
        {
            name: 'Marie Dominique',
            position: 'Responsable Marketing',
            profile:'assets/images/avatars/avatar-8.jpg'
        },
        {
            name: 'Vincent Lepoids',
            position: 'Community Manager',
            profile:'assets/images/avatars/avatar-16.jpg'
        },
        {
            name: 'Adrien Varane',
            position: 'Rédacteur',
            profile:'assets/images/avatars/avatar-12.jpg'
        },
    ]

    constructor(){}
}
