import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Noraco';

    constructor(){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.loadScripts()
        // this.startScrollAnimation()
    }

    startScrollAnimation(): void {
        // Enregistrer le plugin ScrollTrigger
        // document.onload = () => {
        gsap.registerPlugin(ScrollTrigger);
        // console.log(gsap.utils.toArray('.reveal'))

        // const reveals = document.querySelectorAll('.reveal')

        // Animation d'exemple
        gsap.utils.toArray('.reveal').forEach((element) => {
            console.log(element)
            gsap.from(element as HTMLElement, {
                opacity: 0,         // Commence avec une opacité de 0
                duration: 1,        // Durée de l'animation
                scrollTrigger: {
                    trigger: element as HTMLElement, // L'élément qui déclenche l'animation
                    start: 'top 80%', // Débute l'animation quand le haut de l'élément atteint 80% du viewport
                    end: 'top 30%',   // Fin de l'animation
                    scrub: true       // Synchronise l'opacité avec le défilement
                }
            });
        });

        // VERTICAL SCROLL ANIMATION
    }

    loadScripts(){
        const script = document.createElement('script');
        script.src = 'assets/js/main.js'
        script.type = 'text/javascript';
        script.async = true;
        script.onload = () => {
            // reveal('')
            window.addEventListener("load", ()=>{
                // SCROLL ANIMATION
                this.startScrollAnimation()
            });
        }
        document.body.appendChild(script);
    }
}
