import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private key = 'favoriteRecipes';

  getFavorites(): string[] {
    const stored = localStorage.getItem(this.key);
    return stored ? JSON.parse(stored) : [];
  }

  isFavorite(id: string): boolean {
    return this.getFavorites().includes(id);
  }

  toggleFavorite(id: string): boolean {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(id);
    if (index > -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this.key, JSON.stringify(favorites));
      return false; // ora NON è più tra i preferiti
    } else {
      favorites.push(id);
      localStorage.setItem(this.key, JSON.stringify(favorites));
      return true; // ora è preferito
    }
  }
}
