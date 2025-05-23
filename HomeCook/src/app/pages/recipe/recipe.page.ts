import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonIcon
} from "@ionic/angular/standalone";
import {StepsOfRecipesComponent} from "../../steps-of-recipes/steps-of-recipes.component";
import {HeaderComponent} from "../../header/header.component";
import {FavoritesService} from "../../Services/favoritos-service.service";

@Component({
  selector: 'app-recipe',
  standalone: true,
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
  imports: [
    CommonModule,
    IonLabel,
    IonContent,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonImg,
    IonButton,
    IonIcon,
    StepsOfRecipesComponent,
    HeaderComponent
  ]
})

export class RecipePage {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private firestore = inject(Firestore);
  private favoritesService = inject(FavoritesService);
  isFavorite = false;

  recipeId: string | null = null;
  recipeData: any = null;

  async ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      await this.loadRecipe();
    }
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      await this.loadRecipe();
      this.isFavorite = this.favoritesService.isFavorite(this.recipeId);
    }
  }

  toggleFavorite() {
    if (this.recipeId) {
      this.favoritesService.toggleFavorite(this.recipeId);
      this.isFavorite = this.favoritesService.isFavorite(this.recipeId);
      this.router.navigate(['/favorites']); // 🔁 Naviga ai preferiti
    }
  }

  async loadRecipe() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    console.log('ID de la receta:', this.recipeId);

    if (this.recipeId) {
      const recipeRef = doc(this.firestore, `Recipes/${this.recipeId}`);
      const recipeSnap = await getDoc(recipeRef);

      if (recipeSnap.exists()) {
        this.recipeData = recipeSnap.data();
        console.log('Datos de la receta:', this.recipeData);
      } else {
        console.error('Receta no encontrada');
      }
    }
  }

}
