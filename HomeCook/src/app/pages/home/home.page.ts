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
import {ItemComponent} from "../../item/item.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonImg, IonLabel, HeaderComponent, ItemComponent]
})

export class HomePage implements OnInit {
  private firestore = inject(Firestore);
  private router = inject(Router);

  recipes: any[] = [];

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes() {
    const recipesRef = collection(this.firestore, 'Recipes'); // 👈 Asegúrate de que el nombre coincide EXACTAMENTE con Firestore
    collectionData(recipesRef, { idField: 'id' }).subscribe(data => {
      this.recipes = data;
      console.log('Recetas cargadas:', this.recipes);
    });
  }


  goToRecipe(recipeId: string) {
    this.router.navigate(['/recipe', recipeId]);
  }
}

