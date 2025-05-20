import {Component, inject, OnDestroy,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
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
import { FavoritesService } from "../../Services/favoritos-service.service";


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonImg, IonLabel, HeaderComponent, ItemComponent]
})
export class FavoritosPage implements OnInit, OnDestroy {
  private firestore = inject(Firestore);
  private router = inject(Router);
  private favoritesService = inject(FavoritesService);


  recipes: any[] = [];
  private subscription!: Subscription;
  favoriteIds: string[] = [];

  ngOnInit(): void {
    this.subscription = this.favoritesService.favorites$.subscribe(() => {
      this.loadFavoriteRecipes();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadFavoriteRecipes() {
    const favoriteIds = this.favoritesService.getFavorites();

    if (favoriteIds.length === 0) {
      this.recipes = [];
      return;
    }

    const recipesRef = collection(this.firestore, 'Recipes');
    collectionData(recipesRef, { idField: 'id' }).subscribe(data => {
      this.recipes = data.filter(recipe => favoriteIds.includes(recipe.id));
      console.log('Ricette preferite:', this.recipes);
    });
  }

  goToRecipe(recipeId: string) {
    this.router.navigate(['/recipe', recipeId]);
  }

  toggleFavorite(recipe: any) {
    this.favoritesService.toggleFavorite(recipe.id);
    this.recipes = this.recipes.filter(r => this.favoritesService.isFavorite(r.id));
  }

}
