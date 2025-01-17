import { Component, Input } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent {

    @Input()
    title?: string = 'link'
    @Input()
    link?: string = '#'

    active: boolean = false

    constructor(
        private navigationService: NavigationService
    ){}

    ngOnInit(): void {
        this.isActive(this.link!)
    }

    isActive(link: string): void {
        this.navigationService.getCurrentRoute().subscribe(
            (route) => {
                this.active = route.includes(link)
                console.log(route)
            }
        );
    }
}
