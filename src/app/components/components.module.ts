import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './widgets/button/button.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { WorksComponent } from './sections/works/works.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ServicesComponent } from './sections/services/services.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './sections/faq/faq.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ServiceCardComponent } from './widgets/service-card/service-card.component';
import { WorkCardComponent } from './widgets/work-card/work-card.component';
import { TeamComponent } from './sections/team/team.component';
import { TeamCardComponent } from './widgets/team-card/team-card.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { ReviewCardComponent } from './widgets/review-card/review-card.component';
import { NavLinkComponent } from './widgets/nav-link/nav-link.component';
import { ContactFormComponent } from './widgets/contact-form/contact-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    HeroComponent,
    AboutComponent,
    WorksComponent,
    ProjectsComponent,
    ServicesComponent,
    FooterComponent,
    FaqComponent,
    ContactComponent,
    ServiceCardComponent,
    WorkCardComponent,
    TeamComponent,
    TeamCardComponent,
    ReviewsComponent,
    ReviewCardComponent,
    NavLinkComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    NgbModule,
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    HeroComponent,
    AboutComponent,
    WorksComponent,
    ProjectsComponent,
    ServicesComponent,
    FooterComponent,
    FaqComponent,
    ContactComponent,
    ServiceCardComponent,
    WorkCardComponent,
    TeamComponent,
    TeamCardComponent,
    ReviewsComponent,
    NavLinkComponent,
    ContactFormComponent
  ]
})
export class ComponentsModule { }
