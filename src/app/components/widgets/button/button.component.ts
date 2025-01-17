import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

    @Input()
    text?: string = 'click me'
    @Input()
    text_color?: string = 'primary_light'
    @Input()
    text_size?: string = 'base'
    @Input()
    icon?: string = 'dashboard'
    @Input()
    icon_color?: string = 'primary_light'
    @Input()
    background?: string = 'bg-transparent'
    @Input()
    radius?: string = 'full'
    @Input()
    bd?: string = 'none'
    @Input()
    visibility?: string = 'hidden md:flex'
    @Input()
    link?: string = '#'

    constructor(

    ){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
}
