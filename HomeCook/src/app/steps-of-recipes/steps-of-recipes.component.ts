import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonImg,
  IonLabel,
  IonTitle
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-steps-of-recipes',
  standalone: true,
  imports: [CommonModule, IonContent, IonImg, IonLabel, IonTitle],
  templateUrl: './steps-of-recipes.component.html',
  styleUrls: ['./steps-of-recipes.component.scss'],
})
export class StepsOfRecipesComponent implements OnChanges {
  @Input() steps: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['steps']) {
      console.log('Pasos actualizados en el componente hijo:', this.steps);
    }
  }
}
