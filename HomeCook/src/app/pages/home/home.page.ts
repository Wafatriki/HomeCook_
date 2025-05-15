import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonImg, IonLabel, HeaderComponent]
})

export class HomePage implements OnInit {
  private firestore = inject(Firestore);
  private router = inject(Router);

  recipes: any[] = [];

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes() {
    const recipesRef = collection(this.firestore, 'recipes');
    collectionData(recipesRef, { idField: 'id' }).subscribe(data => {
      this.recipes = data;
    });
  }

  goToRecipe(recipeId: string) {
    this.router.navigate(['/recipe', recipeId]);
  }
}

