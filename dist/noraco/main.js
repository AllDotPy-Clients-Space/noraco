"use strict";
(self["webpackChunkNoraco"] = self["webpackChunkNoraco"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ 9582);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap/ScrollTrigger */ 2393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _components_sections_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sections/hero/hero.component */ 6652);
/* harmony import */ var _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sections/about/about.component */ 858);
/* harmony import */ var _components_sections_works_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sections/works/works.component */ 1590);
/* harmony import */ var _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sections/services/services.component */ 908);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sections/contact/contact.component */ 8642);
/* harmony import */ var _components_sections_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sections/team/team.component */ 6482);
/* harmony import */ var _components_sections_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sections/reviews/reviews.component */ 5946);
/* harmony import */ var ng_angular_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-angular-popup */ 1373);













class AppComponent {
  constructor() {
    this.title = 'Noraco';
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadScripts();
    // this.startScrollAnimation()
  }

  startScrollAnimation() {
    // Enregistrer le plugin ScrollTrigger
    // document.onload = () => {
    gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__.ScrollTrigger);
    // console.log(gsap.utils.toArray('.reveal'))
    // const reveals = document.querySelectorAll('.reveal')
    // Animation d'exemple
    gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.utils.toArray('.reveal').forEach(element => {
      console.log(element);
      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.from(element, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true // Synchronise l'opacité avec le défilement
        }
      });
    });
    // VERTICAL SCROLL ANIMATION
  }

  loadScripts() {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      // reveal('')
      window.addEventListener("load", () => {
        // SCROLL ANIMATION
        this.startScrollAnimation();
      });
    };
    document.body.appendChild(script);
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-header")(2, "app-hero")(3, "app-about")(4, "app-services")(5, "app-works")(6, "app-team")(7, "app-reviews")(8, "app-contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "app-footer")(10, "ng-toast");
        }
      },
      dependencies: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_sections_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__.HeroComponent, _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _components_sections_works_works_component__WEBPACK_IMPORTED_MODULE_3__.WorksComponent, _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_4__.ServicesComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _components_sections_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _components_sections_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__.ReviewsComponent, ng_angular_popup__WEBPACK_IMPORTED_MODULE_12__.NgToastComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ 5553);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ng_angular_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-angular-popup */ 1373);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);









class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ng_angular_popup__WEBPACK_IMPORTED_MODULE_6__.NgToastModule,
      // NgbModule,
      _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ng_angular_popup__WEBPACK_IMPORTED_MODULE_6__.NgToastModule,
    // NgbModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 5553:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsModule: () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 385);
/* harmony import */ var _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/button/button.component */ 7781);
/* harmony import */ var _sections_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/hero/hero.component */ 6652);
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/about/about.component */ 858);
/* harmony import */ var _sections_works_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/works/works.component */ 1590);
/* harmony import */ var _sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/projects/projects.component */ 5164);
/* harmony import */ var _sections_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/services/services.component */ 908);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ 5473);
/* harmony import */ var _sections_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/faq/faq.component */ 3038);
/* harmony import */ var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/contact/contact.component */ 8642);
/* harmony import */ var _widgets_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/service-card/service-card.component */ 4949);
/* harmony import */ var _widgets_work_card_work_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/work-card/work-card.component */ 363);
/* harmony import */ var _sections_team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/team/team.component */ 6482);
/* harmony import */ var _widgets_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/team-card/team-card.component */ 6051);
/* harmony import */ var _sections_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/reviews/reviews.component */ 5946);
/* harmony import */ var _widgets_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgets/review-card/review-card.component */ 9003);
/* harmony import */ var _widgets_nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widgets/nav-link/nav-link.component */ 9313);
/* harmony import */ var _widgets_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widgets/contact-form/contact-form.component */ 127);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 7580);






















class ComponentsModule {
  static {
    this.ɵfac = function ComponentsModule_Factory(t) {
      return new (t || ComponentsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _sections_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent, _sections_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _sections_works_works_component__WEBPACK_IMPORTED_MODULE_4__.WorksComponent, _sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent, _sections_services_services_component__WEBPACK_IMPORTED_MODULE_6__.ServicesComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _sections_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__.FaqComponent, _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _widgets_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_10__.ServiceCardComponent, _widgets_work_card_work_card_component__WEBPACK_IMPORTED_MODULE_11__.WorkCardComponent, _sections_team_team_component__WEBPACK_IMPORTED_MODULE_12__.TeamComponent, _widgets_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_13__.TeamCardComponent, _sections_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_14__.ReviewsComponent, _widgets_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_15__.ReviewCardComponent, _widgets_nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_16__.NavLinkComponent, _widgets_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_17__.ContactFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule],
    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _sections_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent, _sections_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _sections_works_works_component__WEBPACK_IMPORTED_MODULE_4__.WorksComponent, _sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent, _sections_services_services_component__WEBPACK_IMPORTED_MODULE_6__.ServicesComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _sections_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__.FaqComponent, _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _widgets_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_10__.ServiceCardComponent, _widgets_work_card_work_card_component__WEBPACK_IMPORTED_MODULE_11__.WorkCardComponent, _sections_team_team_component__WEBPACK_IMPORTED_MODULE_12__.TeamComponent, _widgets_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_13__.TeamCardComponent, _sections_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_14__.ReviewsComponent, _widgets_nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_16__.NavLinkComponent, _widgets_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_17__.ContactFormComponent]
  });
})();

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 60,
      vars: 0,
      consts: [[1, "bg-primary_light", "flex", "flex-col", "space-y-2"], [1, "w-full", "container", "flex", "flex-col-reverse", "justify-between", "px-6", "py-10", "mx-auto", "space-y-8", "md:flex-row", "md:space-y-0", "md:space-x-12"], [1, "mt-8", "md:mt-0", "flex", "flex-col", "-reverse", "md:w-1/3", "items-center", "justify-between", "space-y-4", "md:flex-col", "h-full", "md:space-y-12", "md:items-start"], [1, "flex", "flex-col", "items-center", "md:items-start"], [1, "mb-2", "items-center"], ["src", "../assets/icons/logos/noraco_w.png", "alt", "", 1, "h-10"], [1, "text-light", "text-center", "md:text-left", "text-md-start", "text-sm", "md:text-lg", "w-full", "mt-4"], [1, "w-auto", "flex", "flex-row", "space-x-4"], ["href", "", 1, "hover:text-primary"], [1, "fa", "fa-youtube-play", "fa-lg", "text-light", "hover:text-primary"], [1, "fa", "fa-facebook", "fa-lg", "text-light", "hover:text-primary"], [1, "fa", "fa-instagram", "fa-lg", "text-light", "hover:text-primary"], [1, "fa", "fa-twitter", "fa-lg", "text-light", "hover:text-primary"], [1, "fa", "fa-linkedin", "fa-lg", "text-light", "hover:text-primary"], [1, "grid", "grid-cols-2", "md:grid-cols-3-", "gap-4", "md:gap-24", "justify-start", "md:justify-around"], [1, "flex", "flex-col", "space-y-3", "text-light"], [1, "font-bold", "font-orbitron", "text-light", "text-xl"], ["href", "#hero", 1, "hover:text-orange-800"], ["href", "#work", 1, "hover:text-orange-800"], ["href", "#services", 1, "hover:text-orange-800"], ["href", "#contact", 1, "hover:text-orange-800"], ["href", "#about", 1, "hover:text-orange-800"], ["href", "#", 1, "hover:text-orange-800"], [1, "text-sm"], [1, "flex", "flex-row", "space-x-0", "bg-secondary_light", "rounded-full", "px-1", "py-1"], ["type", "email", "placeholder", "Adresse \u00E9lectronique", 1, "w-full", "h-12", "rounded-3xl", "pl-4", "focus:border-none", "bg-transparent", "focus:outline-none", "text-light"], [1, "bg-light", "text-dark", "rounded-full", "px-4", "py-2", "hover:opacity-80"], [1, "hidden", "text-gray-400", "md:block", "mt-32"], [1, "flex", "justify-center", "items-center", "py-2", "space-x-4", "mb-2", "h-12", "bg-primary_light"], [1, "text-gray-400", "md:block"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Agence de communication globale aux racines digitales. Nous transformons vos id\u00E9es en strat\u00E9gies performantes pour maximiser votre impact. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "MENU");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Accueil");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "R\u00E9alisations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00C0 Propos de Nous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15)(34, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "SERVICES");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Community Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Social Media");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Conseil en Strat\u00E9gie Digitale");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Communication et Marketing Digital");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SEO et SEA");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15)(47, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Newsletter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Restez inform\u00E9 de nos derni\u00E8res nouvelles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " S'abonner ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Made with \u2665 by AllDotPy Inc");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28)(58, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "CopyRight \u00A9 Noraco 2025 All Right reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _widgets_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/contact-form/contact-form.component */ 127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _ngneat_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/dialog */ 953);
/* harmony import */ var _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/button/button.component */ 7781);
/* harmony import */ var _widgets_nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/nav-link/nav-link.component */ 9313);






class HeaderComponent {
  constructor(dialog, ntdialog) {
    this.dialog = dialog;
    this.ntdialog = ntdialog;
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  // HAMBURGER MENU TOGGLER
  toggleMenu() {
    let menu = document.getElementById('menu');
    document.body.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
  }
  // OPEN APPS MODAL
  openContactFormModal(event) {
    window.scrollTo({
      'top': 0
    });
    // document.body.style.overflow = 'hidden';
    const dialogRef = this.ntdialog.open(_widgets_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__.ContactFormComponent, {
      width: 'auto',
      height: 'auto',
      closeButton: true
      // panelClass: 'bg-white shadow-lg rounded-lg',
    });

    dialogRef.backdropClick$.subscribe(() => {
      console.log('Backdrop has been clicked');
    });
    dialogRef.afterClosed$.subscribe(result => {
      document.body.style.overflow = 'auto';
      console.log(`After dialog has been closed ${result}`);
    });
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 55,
      vars: 18,
      consts: [[1, "sticky", "top-0", "backdrop-blur-lg", "container", "w-full", "mx-auto", "px-6", "py-2", "z-50"], [1, "flex", "items-center", "justify-between"], [1, "flex", "w-[75%]", "md:space-x-20", "items-center", "justify-between"], [1, "hidden", "pt-2", "md:block"], ["alt", "", "src", "../assets/icons/logos/noraco.png", 1, "h-10"], [1, "pt-2", "md:hidden"], ["alt", "", "src", "../assets/icons/logos/noraco_s.png", 1, "h-10"], [1, "hidden", "items-center", "justify-center", "pt-0-", "md:flex", "rounded-full", "bg-lightDark", "p-1", "x-4-", "py-3-"], [1, "hidden", "flex-row", "items-center", "justify-center", "md:flex", "space-x-8", "h-11"], [3, "link", "title"], [1, "flex", "w-[25%]", "items-center", "justify-end"], [1, "flex", "flex-row", "items-center", "justify-center", "space-x-5", "mt-0"], [3, "text", "icon", "text_size", "text_color", "icon_color", "background", "link", "bd", "click"], [1, "flex-", "hidden", "flex-row", "space-x-0.5", "items-center"], ["href", "", 1, "hidden", "py-2", "px-2", "pt-2", "ml-6", "font-quicksand", "text-primary_light", "bg-transparent", "baseline", "md:block", "hover:text-secondary_light", "font-light"], ["href", "", 1, "py-2", "px-2", "pt-2", "ml-6", "font-quicksand", "text-primary_light", "bg-transparent", "baseline", "font-light", "hover:secondary_light", "md:hidden"], [1, "w-0.5", "h-4", "bg-gray-400"], ["href", "", 1, "hidden", "py-2", "px-2", "pt-2", "ml-6", "font-quicksand", "text-light", "bg-transparent", "baseline", "text-sm", "md:block", "hover:primary_light", "font-light"], ["href", "", 1, "py-2", "px-2", "pt-2", "ml-6", "font-quicksand", "text-light", "bg-transparent", "baseline", "font-light", "hover:primary_light", "md:hidden"], ["id", "menu-btn", 1, "block", "hamburger", "md:hidden", "focus:outline-none"], [1, "hamburger-top"], [1, "hamburger-middle"], [1, "hamburger-bottom"], ["id", "menu-btn", 1, "block", "hamburger", "md:hidden", "focus:outline-none", 3, "click"], [1, "md:hidden", "self-center", "z-50"], ["id", "menu", 1, "absolute", "flex-col", "items-start", "self-center", "py-8", "mt-0", "hidden", "space-y-6", "font-bold", "bg-secondary_light", "w-auto", "px-10", "z-50", "rounded-lg", "backdrop-blur-2xl", "left-6", "right-6", "drop-shadow-md"], ["href", "#hero", 1, "flex", "items-center", "font-quicksand", "text-primary_light", "no-underline", "hover:text-primary_light"], [1, "fa", "fa-home", "fa-lg", "text-primary", "mr-5"], ["href", "#feactures", 1, "font-quicksand", "text-accent", "no-underline", "hover:text-primary_light"], [1, "fa", "fa-building", "fa-lg", "text-primary", "mr-5"], ["href", "#services", 1, "flex", "items-center", "font-quicksand", "text-accent", "no-underline", "hover:text-primary_light"], [1, "fa", "fa-puzzle-piece", "fa-lg", "text-primary", "mr-5"], ["href", "#", 1, "flex", "items-center", "font-quicksand", "text-accent", "no-underline", "hover:text-primary_light"], [1, "fa", "fa-paper-plane-o", "fa-lg", "text-primary", "mr-5"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-nav-link", 9)(10, "app-nav-link", 9)(11, "app-nav-link", 9)(12, "app-nav-link", 9)(13, "app-nav-link", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "app-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_app_button_click_16_listener($event) {
            return ctx.openContactFormModal($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13)(18, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Fran\u00E7ais ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Fr ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16)(23, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " English ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " En ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "span", 20)(29, "span", 21)(30, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_31_listener() {
            return ctx.toggleMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "span", 20)(33, "span", 21)(34, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 24)(36, "div", 25)(37, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Accueil ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Nos Travaux ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Projets ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Services ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "FAQ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Contact ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("link", "#hero")("title", "Accueil");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("link", "#work")("title", "R\u00E9alisations");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("link", "#services")("title", "Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("link", "#contact")("title", "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("link", "#about")("title", "\u00C0 Propos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "Discutons")("icon", "hgi-stroke hgi-mail-01 font-bold")("text_size", "")("text_color", "light")("icon_color", "light")("background", "bg-primary_light")("link", "")("bd", "border-none border-primary_light");
        }
      },
      dependencies: [_widgets_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _widgets_nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_2__.NavLinkComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 858:
/*!**************************************************************!*\
  !*** ./src/app/components/sections/about/about.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AboutComponent {
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 19,
      vars: 0,
      consts: [["id", "about", 1, "h-20"], ["id", "about-s", 1, "mt-12-", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "flex-col", "container", "mx-auto", "p-4", "mt-10-"], [1, "text-5xl", "md:text-6xl", "text-dark", "reveal", "text-anim"], [1, "mt-12", "flex", "flex-col", "md:flex-row", "space-y-8", "space-x0", "md:space-y-0", "md:space-x-12", "items-center"], [1, "w-full", "md:w-1/2", "reveal"], ["src", "assets/images/about2.jpg", "alt", "", "srcset", "", 1, "w-full", "max-h-[18rem]-", "z-[1]", "aspect-auto-", "rounded-lg"], [1, "w-full", "md:w-1/2", "p-4", "rounded-lg", "bg-lightDark", "reveal"], [1, "text-lg", "text-dark"], [1, "text-md", "text-dark"], [1, "text-primary_light"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Qui sommes-nous ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Fond\u00E9e en 2022 et bas\u00E9e \u00E0 Paris, Noraco Agency est une soci\u00E9t\u00E9 ind\u00E9pendante sp\u00E9cialis\u00E9e dans la communication et le marketing digital. Avec une \u00E9quipe agile de 2 \u00E0 10 experts passionn\u00E9s, nous combinons cr\u00E9ativit\u00E9 et performance pour d\u00E9velopper des strat\u00E9gies digitales sur-mesure, adapt\u00E9es \u00E0 vos objectifs. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Chez Noraco Agency, nous cr\u00E9ons des strat\u00E9gies digitales qui transforment votre vision en succ\u00E8s mesurable. Experts en marketing digital, nous combinons cr\u00E9ativit\u00E9, technologie et performance pour booster la visibilit\u00E9 de votre marque et fid\u00E9liser vos clients. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9)(16, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Notre engagement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ": Mettre le digital au service de votre communication pour vous aider \u00E0 rayonner dans un monde connect\u00E9. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8642:
/*!******************************************************************!*\
  !*** ./src/app/components/sections/contact/contact.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _widgets_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/contact-form/contact-form.component */ 127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _ngneat_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/dialog */ 953);
/* harmony import */ var _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/button/button.component */ 7781);






class ContactComponent {
  constructor(modalService, dialog, ntdialog) {
    this.modalService = modalService;
    this.dialog = dialog;
    this.ntdialog = ntdialog;
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  // OPEN APPS MODAL
  openContactFormModal(event) {
    window.scrollTo({
      'top': 0
    });
    // document.body.style.overflow = 'hidden';
    const dialogRef = this.ntdialog.open(_widgets_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__.ContactFormComponent, {
      width: 'auto',
      height: 'auto',
      closeButton: true,
      data: this
      // panelClass: 'bg-white shadow-lg rounded-lg',
    });

    dialogRef.backdropClick$.subscribe(() => {
      console.log('Backdrop has been clicked');
    });
    dialogRef.afterClosed$.subscribe(result => {
      document.body.style.overflow = 'auto';
      console.log(`After dialog has been closed ${result}`);
    });
  }
  static {
    this.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngneat_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 8,
      vars: 8,
      consts: [["id", "contact", 1, "h-20", "bg-light-"], ["id", "contact-s", 1, "mt-12-", "flex", "flex-col", "items-center", "justify-center", "bg-primary_light", "p-4", "rounded-t-xl"], [1, "flex", "flex-col", "container", "mx-auto", "items-center", "px-6", "py-8", "rounded-xl", "bg-light_canvas"], [1, "text-5xl", "md:text-6xl", "text-dark", "text-center", "text-anim"], [1, "text-lg", "text-dark", "w-full", "md:w-1/2", "mt-4", "text-center"], [3, "text", "icon", "text_size", "text_color", "visibility", "icon_color", "background", "radius", "link", "bd", "click"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Pr\u00EAt \u00E0 passer \u00E0 l\u2019action ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Nos experts sont l\u00E0 pour discuter de vos projets et trouver les solutions adapt\u00E9es \u00E0 vos besoins. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactComponent_Template_app_button_click_7_listener($event) {
            return ctx.openContactFormModal($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Discutons")("icon", "hgi-stroke hgi-mail-01 font-bold")("text_color", "light")("visibility", "flex")("icon_color", "light  font-bold")("background", "bg-primary_light")("link", "")("bd", "border border-primary_light w-fit [20rem] mt-10 justify-center");
        }
      },
      dependencies: [_widgets_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3038:
/*!**********************************************************!*\
  !*** ./src/app/components/sections/faq/faq.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FaqComponent {
  static {
    this.ɵfac = function FaqComponent_Factory(t) {
      return new (t || FaqComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaqComponent,
      selectors: [["app-faq"]],
      decls: 2,
      vars: 0,
      template: function FaqComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "faq works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6652:
/*!************************************************************!*\
  !*** ./src/app/components/sections/hero/hero.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/button/button.component */ 7781);


class HeroComponent {
  static {
    this.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 40,
      vars: 22,
      consts: [["id", "hero", 1, "h-4", "md:h-10"], ["id", "hero-s", 1, "flex", "flex-col", "container", "mx-auto", "md:flex-row", "items-start", "justify-center"], [1, "w-full", "md:w-1/2", "flex", "flex-col", "container-", "items-center", "md:items-start", "justify-center", "mx-auto", "p-4", "bg-dark-", "h-[50vh]-"], [1, "hidden", "flex-", "items-center", "justify-start", "w-full", "space-x-4", "md:space-x-6"], [1, "w-16", "h-.5", "border", "border-gray-500"], [1, "text-gray-500", "text-2xl", "md:text-4xl", "leading-none"], [1, "text-4xl", "md:text-[5rem]", "text-dark", "font-quicksand-", "text-md-start", "mt-4", "leading-none", "text-center", "md:text-left"], [1, "text-dark", "text-lg", "font-bold", "mt-16", "italic"], [1, "text-gray-500", "text-lg", "text-center", "md:text-left", "text-md-start", "mt-3", "max-w-[80%]", "md:max-w-[70%]"], [1, "flex", "flex-col", "md:flex-row", "justify-center", "space-x-0", "md:space-x-4", "space-y-4", "md:space-y-0", "mt-4"], [3, "text", "icon", "text_size", "text_color", "visibility", "icon_color", "bd", "background"], [3, "text", "icon", "text_size", "visibility", "icon_color", "bd"], [1, "flex", "flex-col-reverse", "md:flex-col", "p-4", "w-full", "md:w-1/2", "md:space-y-4"], [1, "flex", "flex-col-", "items-center", "md:flex-row", "space-x-0-", "space-y-3-", "space-x-3", "mspace-y-0", "w-full", "h-[18rem]", "mt-4"], [1, "flex", "flex-col", "p-5", "rounded-3xl", "bg-lightDark", "w-1/2", "md:w-1/2", "h-full", "justify-between"], [1, "text-5xl", "md:text-6xl", "text-dark"], [1, "flex", "flex-col", "space-y-2"], [1, "text-dark", "text-lg", "font-bold"], [1, "font-quicksand"], [3, "text", "icon", "text_size", "link", "radius", "visibility", "icon_color", "bd"], [1, "flex", "h-14", "w-2/3", "rounded-full", "-space-x-6"], ["src", "assets/images/avatars/avatar-1.jpg", 1, "h-14", "rounded-full", "border-2", "border-light_canvas"], ["src", "assets/images/avatars/avatar-2.jpg", 1, "h-14", "rounded-full", "border-2", "border-light_canvas"], ["src", "assets/images/avatars/avatar-12.jpg", 1, "h-14", "rounded-full", "border-2", "border-light_canvas"], ["src", "assets/images/avatars/avatar-0.jpg", 1, "h-14", "rounded-full", "border-2", "border-light_canvas"], [1, "w-full", "md:w-1/2-", "h-[20rem]", "md:h-[24rem]", "lg:h-[32rem]", "px-0", "bg-[url('src/assets/images/about4.jpg')]", "bg-no-repeat", "bg-cover", "rounded-3xl", "bg-center", "bg-opacity-85-"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " NORACO AGENCY ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Donnez des Ailes \u00E0 Votre Marque avec Noraco Agency ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cr\u00E8ativit\u00E9 \u2022 Engagement \u2022 Inspiration");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Noraco Agency propulse votre marque vers de nouveaux sommets gr\u00E2ce \u00E0 des strat\u00E9gies digitales innovantes et sur-mesure. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-button", 10)(16, "app-button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " 200 + ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16)(23, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Collaborations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " D\u00E9couvrez notre \u00E9quipe passionn\u00E9e et talentueuse qui donne vie \u00E0 nos projets et fait de vos ambitions une r\u00E9alit\u00E9. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "app-button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14)(29, "div", 16)(30, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Communaut\u00E9e engag\u00E9e");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Nous vous aidons \u00E0 cr\u00E9er votre communaut\u00E9 engag\u00E9e, unie par des valeurs communes, pr\u00EAte \u00E0 collaborer, partager et grandir ensemble. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 21)(36, "img", 22)(37, "img", 23)(38, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "Demandez un audit gratuit")("icon", "hgi-stroke hgi-arrow-up-right-02")("text_size", "")("text_color", "light")("visibility", "flex")("icon_color", "light font-bold")("bd", "border border-primary_light")("background", "bg-primary_light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "D\u00E9couvrir nos services")("icon", "hgi-stroke hgi-arrow-down-right-02")("text_size", "")("visibility", "flex")("icon_color", "primary_light  font-bold")("bd", "border border-primary_light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "D\u00E9couvrir l'\u00E9quipe")("icon", "hgi-stroke hgi-arrow-down-right-02")("text_size", "")("link", "#team")("radius", "full")("visibility", "flex")("icon_color", "primary_light  font-bold")("bd", "border border-primary_light w-fit");
        }
      },
      dependencies: [_widgets_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5164:
/*!********************************************************************!*\
  !*** ./src/app/components/sections/projects/projects.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ProjectsComponent {
  static {
    this.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 2,
      vars: 0,
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5946:
/*!******************************************************************!*\
  !*** ./src/app/components/sections/reviews/reviews.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsComponent: () => (/* binding */ ReviewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/button/button.component */ 7781);
/* harmony import */ var _widgets_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/review-card/review-card.component */ 9003);




function ReviewsComponent_app_review_card_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-review-card", 9);
  }
  if (rf & 2) {
    const review_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("reveiw", review_r1);
  }
}
class ReviewsComponent {
  constructor() {
    this.reviews = [{
      name: 'Jean-François',
      content: "Noraco Agency a su comprendre nos besoins et nous proposer une stratégie digitale parfaitement adaptée. Leur équipe est réactive, professionnelle et force de proposition. Grâce à eux, nous avons atteint nos objectifs de visibilité en un temps record.",
      position: 'PDG de Valoria',
      profile: ''
    }, {
      name: 'Ralph Tépé',
      content: "Leur expertise en community management et réseaux sociaux a fait toute la différence. Nous avons vu notre engagement augmenter de manière significative, et nos campagnes publicitaires ont surpassé nos attentes. Merci à toute l'équipe !",
      position: 'CTO de Alltoo',
      profile: ''
    }, {
      name: 'Adolé Emmanuella',
      content: "Collaborer avec Noraco Agency a été un vrai plaisir. Leur créativité et leur compréhension de notre secteur nous ont permis de renforcer notre image de marque et d’atteindre un public plus large.",
      position: 'Responsable Communication',
      profile: ''
    }];
  }
  static {
    this.ɵfac = function ReviewsComponent_Factory(t) {
      return new (t || ReviewsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ReviewsComponent,
      selectors: [["app-reviews"]],
      decls: 11,
      vars: 7,
      consts: [["id", "reviews", 1, "h-20"], ["id", "reviews-s", 1, "mt-12-", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "flex-col", "container", "mx-auto", "px-6", "py-12", "border-", "border-lightDark-", "rounded-xl", "items-start"], [1, "text-5xl", "md:text-6xl", "text-dark", "text-left", "reveal", "text-anim"], [1, "w-full", "reveal", "flex", "flex-col", "md:flex-row", "items-center", "justify-center", "mt-4", "space-x-0", "space-y-6", "md:justify-between", "md:space-y-0"], [1, "text-lg", "text-dark", "w-full", "md:w-1/2", "mt-4"], [3, "text", "icon", "text_size", "icon_color", "visibility", "bd"], [1, "grid", "gap-4", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "mt-12", "w-full", "bg-slate-600-"], [3, "reveiw", 4, "ngFor", "ngForOf"], [3, "reveiw"]],
      template: function ReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Ce que nos clients disent ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " D\u00E9couvrez comment notre expertise en communication et marketing digital a transform\u00E9 leurs projets. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ReviewsComponent_app_review_card_10_Template, 1, 1, "app-review-card", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "voir plus")("icon", "hgi-stroke hgi-arrow-up-right-02")("text_size", "")("icon_color", "primary_light")("visibility", "")("bd", "border border-primary_light");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviews);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, _widgets_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_1__.ReviewCardComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 908:
/*!********************************************************************!*\
  !*** ./src/app/components/sections/services/services.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _widgets_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/service-card/service-card.component */ 4949);



const _c0 = function () {
  return {
    "reveal": true
  };
};
function ServicesComponent_app_service_card_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-service-card", 7);
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infos", service_r1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
  }
}
class ServicesComponent {
  constructor() {
    this.services = [{
      'title': 'Community Management',
      'icon': 'hgi-stroke hgi-user-group',
      'description': 'Développez une communauté engagée et fidélisez vos audiences.'
    }, {
      'title': 'Social Media',
      'icon': 'hgi-stroke hgi-tiktok',
      'description': 'Créez des campagnes percutantes sur vos plateformes préférées.'
    }, {
      'title': 'Conseil en Stratégie Digitale',
      'icon': 'hgi-stroke hgi-finger-access',
      'description': ' Identifiez les opportunités et atteignez vos objectifs grâce à une approche personnalisée.'
    }, {
      'title': 'Communication et Marketing Digital',
      'icon': 'hgi-stroke hgi-megaphone-02',
      'description': 'Positionnez votre marque en leader sur son marché.'
    }, {
      'title': 'SEO et SEA',
      'icon': 'hgi-stroke hgi-traffic-light',
      'description': 'Optimisez votre visibilité et attirez du trafic qualifié.'
    }, {
      'title': "Stratégie d'influence",
      'icon': 'hgi-stroke hgi-time-schedule',
      'description': 'Connectez-vous à des influenceurs pertinents pour toucher votre audience.'
    }];
  }
  static {
    this.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 9,
      vars: 1,
      consts: [["id", "services", 1, "h-20"], ["id", "services-s", 1, "mt-16-", "px-4", "md:px-0", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "flex-col", "container", "mx-auto", "px-6", "py-12", "bg-primary_light", "rounded-xl"], [1, "text-5xl", "md:text-6xl", "text-light", "reveal", "text-anim"], [1, "text-lg", "text-light", "mt-4", "w-full", "md:w-1/2", "reveal"], [1, "mt-12", "grid", "gap-3", "grid-cols-1", "md:grid-cols-3"], [3, "infos", "ngClass", 4, "ngFor", "ngForOf"], [3, "infos", "ngClass"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Ce que nous faisons ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Chez Noraco Agency, nous vous accompagnons dans toutes les \u00E9tapes de votre strat\u00E9gie digitale. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ServicesComponent_app_service_card_8_Template, 1, 3, "app-service-card", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _widgets_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_0__.ServiceCardComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6482:
/*!************************************************************!*\
  !*** ./src/app/components/sections/team/team.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamComponent: () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/button/button.component */ 7781);
/* harmony import */ var _widgets_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/team-card/team-card.component */ 6051);




function TeamComponent_app_team_card_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-team-card", 8);
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("member", member_r1);
  }
}
class TeamComponent {
  constructor() {
    this.members = [{
      name: 'Noémie Couasnon',
      position: 'CEO • Fondatrice',
      profile: 'assets/images/avatars/avatar-0.jpg'
    }, {
      name: 'Wilfried GOEH',
      position: 'Architecte Logiciel',
      profile: 'assets/images/avatars/avatar-1.jpg'
    }, {
      name: 'Marie Dominique',
      position: 'Responsable Marketing',
      profile: 'assets/images/avatars/avatar-8.jpg'
    }, {
      name: 'Vincent Lepoids',
      position: 'Community Manager',
      profile: 'assets/images/avatars/avatar-16.jpg'
    }, {
      name: 'Adrien Varane',
      position: 'Rédacteur',
      profile: 'assets/images/avatars/avatar-12.jpg'
    }];
  }
  static {
    this.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 10,
      vars: 9,
      consts: [["id", "team", 1, "h-20", "bg-light"], ["id", "team-s", 1, "mt-12-", "flex", "flex-col", "items-center", "justify-center", "bg-light", "py-12"], [1, "flex", "flex-col", "container", "mx-auto", "px-6", "pb-16", "rounded-xl"], [1, "text-5xl", "md:text-6xl", "text-dark", "reveal", "text-anim"], [1, "text-lg", "text-dark", "w-full", "md:w-1/2", "mt-4", "reveal"], [1, "grid", "gap-4", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-5", "w-full", "mt-12"], [3, "member", 4, "ngFor", "ngForOf"], [3, "text", "icon", "text_size", "text_color", "visibility", "icon_color", "background", "radius", "bd"], [3, "member"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Une \u00E9quipe passionn\u00E9e \u00E0 votre service ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Notre \u00E9quipe est compos\u00E9e de professionnels d\u00E9vou\u00E9s, chacun apportant sa vision unique et son savoir-faire pour r\u00E9pondre \u00E0 vos besoins. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TeamComponent_app_team_card_8_Template, 1, 1, "app-team-card", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.members);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Voir plus")("icon", "hgi-stroke hgi-arrow-right-01")("text_size", "")("text_color", "light")("visibility", "flex")("icon_color", "light  font-bold")("background", "bg-primary_light")("bd", "border border-primary_light w-fit [20rem] mt-10 justify-center reveal");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, _widgets_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_1__.TeamCardComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1590:
/*!**************************************************************!*\
  !*** ./src/app/components/sections/works/works.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorksComponent: () => (/* binding */ WorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/button/button.component */ 7781);
/* harmony import */ var _widgets_work_card_work_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/work-card/work-card.component */ 363);




function WorksComponent_app_work_card_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-work-card", 9);
  }
  if (rf & 2) {
    const work_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("info", work_r1);
  }
}
class WorksComponent {
  constructor() {
    this.works = [{
      title: 'Optimisation SEO',
      company: 'AllDotPy Inc.',
      desciption: 'Une campagne Instagram ayant atteint 500 000 impressions en 1 mois une campagne publicitaire internationale avec un ROI de 400%.',
      image: 'assets/images/work0.jpg',
      reverse: '-reverse'
    }, {
      title: 'Réseaux sociaux',
      company: 'AllDotPy Inc.',
      desciption: 'Une campagne Instagram ayant atteint 500 000 impressions en 1 mois une campagne publicitaire internationale avec un ROI de 400%.',
      image: 'assets/images/work1.jpg',
      reverse: ''
    }, {
      title: 'Strategie de Branding',
      company: 'AllDotPy Inc.',
      desciption: 'Une campagne Instagram ayant atteint 500 000 impressions en 1 mois une campagne publicitaire internationale avec un ROI de 400%.',
      image: 'assets/images/hero3.jpg',
      reverse: '-reverse'
    }];
  }
  static {
    this.ɵfac = function WorksComponent_Factory(t) {
      return new (t || WorksComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WorksComponent,
      selectors: [["app-works"]],
      decls: 11,
      vars: 7,
      consts: [["id", "work", 1, "h-20"], ["id", "work-s", 1, "mt-12-", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "flex-col", "container", "mx-auto", "px-6", "py-1-", "rounded-xl", "bg-light_canvas"], [1, "text-5xl", "md:text-6xl", "text-dark", "reveal", "text-anim"], [1, "reveal", "flex", "flex-col", "md:flex-row", "items-center", "justify-center", "mt-4", "space-x-0", "space-y-6", "md:justify-between", "md:space-y-0"], [1, "text-lg", "text-dark", "w-full", "md:w-1/2", "mt-4"], [3, "text", "icon", "text_size", "icon_color", "visibility", "bd"], [1, "w-full", "my-8"], [3, "info", 4, "ngFor", "ngForOf"], [3, "info"]],
      template: function WorksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Nos r\u00E9alisations ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Nos collaborations parlent d'elles-m\u00EAmes, D\u00E9couvrez comment nous avons aid\u00E9 nos clients \u00E0 atteindre leurs objectifs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, WorksComponent_app_work_card_10_Template, 1, 1, "app-work-card", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "voir plus")("icon", "hgi-stroke hgi-arrow-up-right-02")("text_size", "")("icon_color", "primary_light")("visibility", "")("bd", "border border-primary_light");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.works);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _widgets_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, _widgets_work_card_work_card_component__WEBPACK_IMPORTED_MODULE_1__.WorkCardComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7781:
/*!***************************************************************!*\
  !*** ./src/app/components/widgets/button/button.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonComponent: () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ButtonComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate6"]("\n    ", ctx_r0.visibility, "\n    rounded-", ctx_r0.radius, " ", ctx_r0.background, "\n    text-", ctx_r0.text_color, " py-3 px-4 ", ctx_r0.bd, "\n    text-", ctx_r0.text_size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("ml-2 ", ctx_r0.icon, " text-", ctx_r0.icon_color, "");
  }
}
function ButtonComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate6"](" cursor-pointer\n    ", ctx_r1.visibility, "\n    rounded-", ctx_r1.radius, " ", ctx_r1.background, "\n    text-", ctx_r1.text_color, " py-3 px-4 ", ctx_r1.bd, "\n    text-", ctx_r1.text_size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("ml-2 ", ctx_r1.icon, " text-", ctx_r1.icon_color, "");
  }
}
class ButtonComponent {
  constructor() {
    this.text = 'click me';
    this.text_color = 'primary_light';
    this.text_size = 'base';
    this.icon = 'dashboard';
    this.icon_color = 'primary_light';
    this.background = 'bg-transparent';
    this.radius = 'full';
    this.bd = 'none';
    this.visibility = 'hidden md:flex';
    this.link = '#';
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  static {
    this.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || ButtonComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonComponent,
      selectors: [["app-button"]],
      inputs: {
        text: "text",
        text_color: "text_color",
        text_size: "text_size",
        icon: "icon",
        icon_color: "icon_color",
        background: "background",
        radius: "radius",
        bd: "bd",
        visibility: "visibility",
        link: "link"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "href", "class", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "href"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_a_0_Template, 3, 14, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_a_1_Template, 3, 13, "a", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link != "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link == "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 127:
/*!***************************************************************************!*\
  !*** ./src/app/components/widgets/contact-form/contact-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactFormComponent: () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button.component */ 7781);


class ContactFormComponent {
  constructor() {}
  static {
    this.ɵfac = function ContactFormComponent_Factory(t) {
      return new (t || ContactFormComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContactFormComponent,
      selectors: [["app-contact-form"]],
      decls: 28,
      vars: 8,
      consts: [[1, "flex", "flex-col", "md:flex-row", "w-[90vw]", "md:w-[75vw]", "lg:w-[60vw]", "rounded-xl-", "p-8-", "bg-orange-900", "text-light"], [1, "flex-flex-col", "w-full", "md:w-1/2", "py-8", "px-4"], [1, "text-4xl", "md:text-6xl", "leading-none", "font-quicksand", "font-bold", "text-light", "text-left", "w-full"], [1, "w-full", "md:w-1/2-", "h-[16rem]", "md:h-[18rem]", "lg:h-[20rem]", "px-0", "bg-[url('src/assets/images/about0.jpg')]", "bg-no-repeat", "bg-cover", "rounded-md", "bg-center", "bg-opacity-85-", "mt-4"], [1, "text-light", "text-center", "mt-4"], [1, "flex", "flex-col", "w-full", "md:w-1/2", "bg-light_canvas", "p-6", "items-center"], [1, "text-2xl", "font-bold", "text-dark", "text-center", "w-full"], [1, "flex", "flex-col", "space-x-0", "bg-light_canvas", "rounded-lg", "mt-8", "w-full"], [1, "text-xs", "text-dark"], ["type", "text", "placeholder", "Ex: Bernard Gautier", 1, "w-full", "h-12", "rounded-lg", "pl-4", "focus:border-none", "bg-light", "focus:outline-none", "mt-1", "text-dark"], [1, "flex", "flex-col", "space-x-0", "bg-light_canvas", "rounded-lg", "mt-6", "w-full"], ["type", "email", "placeholder", "exemple@exemple.com", 1, "w-full", "h-12", "rounded-lg", "pl-4", "focus:border-none", "bg-light", "focus:outline-none", "mt-1", "text-dark"], ["type", "tel", "placeholder", "Ex: 06007008...", 1, "w-full", "h-12", "rounded-lg", "pl-4", "focus:border-none", "bg-light", "focus:outline-none", "mt-1", "text-dark"], ["type", "email", 1, "w-full", "min-h-36", "rounded-lg", "pl-4", "focus:border-none", "bg-light", "focus:outline-none", "mt-1", "text-dark"], [3, "text", "icon", "text_size", "text_color", "visibility", "icon_color", "background", "radius", "link", "bd", "click"]],
      template: function ContactFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Pr\u00EAt \u00E0 collaborer avec nous ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Nous sommes l\u00E0 pour r\u00E9pondre \u00E0 toutes vos questions et faire d\u00E9coller votre projet. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Parlez-nous de votre Projet. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nom & Pr\u00E9nom(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Adresse \u00E9lectronique");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Num\u00E9ro de T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10)(23, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Votre M\u00E9ssage");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "...\n            ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "app-button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactFormComponent_Template_app_button_click_27_listener() {
            return 0;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "Envoyer")("icon", "hgi-stroke hgi-sent font-bold")("text_color", "light")("visibility", "flex")("icon_color", "light  font-bold")("background", "bg-primary_light")("link", "")("bd", "border border-primary_light w-fit [20rem] mt-10 justify-center");
        }
      },
      dependencies: [_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9313:
/*!*******************************************************************!*\
  !*** ./src/app/components/widgets/nav-link/nav-link.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLinkComponent: () => (/* binding */ NavLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ 7664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = function (a0) {
  return {
    "text-light bg-orange-900": a0
  };
};
class NavLinkComponent {
  constructor(navigationService) {
    this.navigationService = navigationService;
    this.title = 'link';
    this.link = '#';
    this.active = false;
  }
  ngOnInit() {
    this.isActive(this.link);
  }
  isActive(link) {
    this.navigationService.getCurrentRoute().subscribe(route => {
      this.active = route.includes(link);
      console.log(route);
    });
  }
  static {
    this.ɵfac = function NavLinkComponent_Factory(t) {
      return new (t || NavLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavLinkComponent,
      selectors: [["app-nav-link"]],
      inputs: {
        title: "title",
        link: "link"
      },
      decls: 3,
      vars: 5,
      consts: [[1, ""], [1, "nav-link", "font-inter", "leading-none", "text-dark", "no-underline", "hover:text-light", "hover:bg-orange-900", "text-lg", "rounded-full", "px-3", "py-2.5", "font-extrabold-", 3, "href", "ngClass"]],
      template: function NavLinkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9003:
/*!*************************************************************************!*\
  !*** ./src/app/components/widgets/review-card/review-card.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewCardComponent: () => (/* binding */ ReviewCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ReviewCardComponent {
  constructor() {}
  static {
    this.ɵfac = function ReviewCardComponent_Factory(t) {
      return new (t || ReviewCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewCardComponent,
      selectors: [["app-review-card"]],
      inputs: {
        reveiw: "reveiw"
      },
      decls: 10,
      vars: 3,
      consts: [[1, "flex", "flex-col", "md:flex-row-", "w-full", "h-full", "p-4", "rounded-xl", "bg-lightDark", "justify-between", "reveal"], [1, "text-lg", "text-dark"], [1, "flex", "h-14", "space-x-3"], ["src", "assets/images/avatars/avatar-2.jpg", "alt", "", 1, "h-full", "w-14", "aspect-square", "rounded-full"], [1, "flex", "flex-col", "space-y-2", "h-14"], [1, "text-lg", "text-dark", "leading-none"], [1, "text-md", "text-gray-400", "italic"]],
      template: function ReviewCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reveiw == null ? null : ctx.reveiw.content);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reveiw == null ? null : ctx.reveiw.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reveiw == null ? null : ctx.reveiw.position);
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4949:
/*!***************************************************************************!*\
  !*** ./src/app/components/widgets/service-card/service-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCardComponent: () => (/* binding */ ServiceCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button.component */ 7781);


class ServiceCardComponent {
  constructor() {}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  static {
    this.ɵfac = function ServiceCardComponent_Factory(t) {
      return new (t || ServiceCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServiceCardComponent,
      selectors: [["app-service-card"]],
      inputs: {
        infos: "infos"
      },
      decls: 13,
      vars: 12,
      consts: [[1, "w-full", "h-fit", "md:h-full", "justify-between", "flex", "flex-col", "space-y-2", "p-4", "reveal", "rounded-xl", "bg-secondary_light"], [1, "flex", "flex-col"], [1, "flex", "items-center", "justify-center", "h-11", "w-11", "rounded-lg", "bg-primary_dark"], ["size", "48"], [1, "text-light", "text-lg", "font-bold", "mt-4"], [1, "text-sm-", "text-light", "mt-4", "w-full"], [1, "text-xs", "text-light", "mt-4", "w-full"], [3, "text", "text_color", "icon", "text_size", "visibility", "icon_color", "bd"]],
      template: function ServiceCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Qu'est-ce qui est inclus dans ce service ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br")(11, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx.infos == null ? null : ctx.infos.icon, " font-bold text-primary_light text-lg leading-none");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.infos == null ? null : ctx.infos.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.infos == null ? null : ctx.infos.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "Commencer une discussion")("text_color", "gray-400")("icon", "hgi-stroke hgi-arrow-right-01")("text_size", "")("visibility", "flex w-fit")("icon_color", "light  font-bold")("bd", "border border-gray-400");
        }
      },
      dependencies: [_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6051:
/*!*********************************************************************!*\
  !*** ./src/app/components/widgets/team-card/team-card.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamCardComponent: () => (/* binding */ TeamCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class TeamCardComponent {
  constructor() {}
  static {
    this.ɵfac = function TeamCardComponent_Factory(t) {
      return new (t || TeamCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamCardComponent,
      selectors: [["app-team-card"]],
      inputs: {
        member: "member"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "flex", "flex-col", "h-full", "w-full", "reveal"], [1, "w-full", "h-[10rem]-", "lg:h-[12rem]-", "aspect-square", "rounded-lg", "bg-lightDark"], ["alt", "", "srcset", "", 1, "w-full", "aspect-auto-", "rounded-lg", 3, "src"], [1, "text-dark", "text-lg", "font-bold", "mt-4"], [1, "text-gray-500", "text-md"]],
      template: function TeamCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.member == null ? null : ctx.member.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.member == null ? null : ctx.member.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.member == null ? null : ctx.member.position, " ");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 363:
/*!*********************************************************************!*\
  !*** ./src/app/components/widgets/work-card/work-card.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkCardComponent: () => (/* binding */ WorkCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = function (a0, a1) {
  return {
    "md:flex-row-reverse": a0,
    "md:flex-row": a1
  };
};
const _c1 = function (a0) {
  return {
    "hidden": a0
  };
};
class WorkCardComponent {
  constructor() {}
  static {
    this.ɵfac = function WorkCardComponent_Factory(t) {
      return new (t || WorkCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkCardComponent,
      selectors: [["app-work-card"]],
      inputs: {
        info: "info"
      },
      decls: 22,
      vars: 17,
      consts: [[1, "flex", "flex-col", "items-center", "reveal", "justify-center", "w-full", "md:h-[18rem]-", "space-x-0", "space-y-4", "md:space-x-12", "md:space-y-0", "md:iems-start", 3, "ngClass"], [1, "z-[2]", "flex", "flex-col", "p-4", "rounded-xl", "border", "border-gray-300", "bg-light_canvas", "-mr-[18%]", 3, "ngClass"], [1, "text-dark", "text-xl"], [1, "text-md", "text-gray-500"], ["alt", "", "srcset", "", 1, "w-full", "max-h-[18rem]-", "z-[1]", "aspect-auto-", "rounded-lg", 3, "src"], [1, "z-[2]", "flex", "flex-col", "p-4", "rounded-xl", "border", "border-gray-300", "bg-light_canvas", "-ml-[18%]", 3, "ngClass"], [1, "flex", "flex-col", "items-start", "justify-between", "md:h-[18rem]", "w-full", "md:w-1/2"], [1, "text-lg", "md:text-lg", "text-gray-500", "rounded-full", "border", "border-gray-400", "p-2"], [1, "flex", "flex-col", "space-y-4", "w-full", "mt-4", "md:mt-0"], [1, "text-dark", "text-2xl"], [1, "w-full", "my-8"]],
      template: function WorkCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+75%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Followers Engagement");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+75%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Followers Engagement");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8)(17, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 10);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, (ctx.info == null ? null : ctx.info.reverse) != "", (ctx.info == null ? null : ctx.info.reverse) == ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flex flex-row ", ctx.info == null ? null : ctx.info.reverse, " items-center justify-center w-full md:w-1/2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, (ctx.info == null ? null : ctx.info.reverse) == ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.info == null ? null : ctx.info.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, (ctx.info == null ? null : ctx.info.reverse) != ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.info == null ? null : ctx.info.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info == null ? null : ctx.info.company);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info == null ? null : ctx.info.desciption);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7664:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationService: () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class NavigationService {
  constructor(router) {
    this.router = router;
    this.currentRoute = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(event => {
      this.currentRoute.next(event.urlAfterRedirects);
    });
  }
  getCurrentRoute() {
    return this.currentRoute.asObservable();
  }
  static {
    this.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1643), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map