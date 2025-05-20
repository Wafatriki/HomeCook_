import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private key = 'favoriteRecipes';
  private favoritesSubject = new BehaviorSubject<string[]>(this.getFavorites());
  favorites$ = this.favoritesSubject.asObservable();

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
    } else {
      favorites.push(id);
    }

    localStorage.setItem(this.key, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);

    return index === -1;
  }
}
