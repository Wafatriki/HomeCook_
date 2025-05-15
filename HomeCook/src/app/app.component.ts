import { Component } from '@angular/core';
import {IonApp, IonContent, IonRouterOutlet} from '@ionic/angular/standalone';
import {HeaderComponent} from "./header/header.component";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonContent, HeaderComponent],

})
export class AppComponent {
  constructor() {}
}
