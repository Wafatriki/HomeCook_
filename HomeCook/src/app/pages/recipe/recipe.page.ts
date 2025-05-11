import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
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
    IonItem,
    IonImg,
    IonButton
  ]
})
export class RecipePage {
  private route = inject(ActivatedRoute);
  private firestore = inject(Firestore);

  recipeId: string | null = null;
  recipeData: any = null;
  isFavorite: boolean = false;

  async ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      await this.loadRecipe();
    }
  }

  async loadRecipe() {
    const recipeRef = doc(this.firestore, `recipes/${this.recipeId}`);
    const recipeSnap = await getDoc(recipeRef);

    if (recipeSnap.exists()) {
      this.recipeData = recipeSnap.data();
    } else {
      console.error('Receta no encontrada');
    }
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite ? 'Añadido a favoritos' : 'Eliminado de favoritos');
  }
}
