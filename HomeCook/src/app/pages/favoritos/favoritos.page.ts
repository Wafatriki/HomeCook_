import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
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
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonImg, IonLabel, HeaderComponent, ItemComponent]
})
export class FavoritosPage implements OnInit {
  private firestore = inject(Firestore);
  private router = inject(Router);

  recipes: any[] = [];
  favoriteIds: string[] = [];

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes() {
    const recipesRef = collection(this.firestore, 'Recipes');
    collectionData(recipesRef, { idField: 'id' }).subscribe(data => {
      this.recipes = data.map(recipe => ({
        ...recipe,
        isFavorite: this.favoriteIds.includes(recipe.id)
      }));
      console.log('Recetas cargadas con favoritos:', this.recipes);
    });
  }



  goToRecipe(recipeId: string) {
    this.router.navigate(['/recipe', recipeId]);
  }

  toggleFavorite(recipe: any) {
    if (recipe.isFavorite) {
      // Rimuovi dai preferiti
      this.favoriteIds = this.favoriteIds.filter(id => id !== recipe.id);
    } else {
      // Aggiungi ai preferiti
      this.favoriteIds.push(recipe.id);
    }
    // Aggiorna la lista per riflettere i cambiamenti
    this.recipes = this.recipes.map(r => ({
      ...r,
      isFavorite: this.favoriteIds.includes(r.id)
    }));
  }
}
