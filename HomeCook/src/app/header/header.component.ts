import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {IonButton, IonButtons, IonHeader, IonImg, IonTitle, IonToolbar} from "@ionic/angular/standalone";
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonButton, IonButtons,
    IonImg, IonToolbar, IonTitle
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  authToken: string | null = null;
  searchQuery: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/recipes-filter'], { queryParams: { search: this.searchQuery } });
    }
  }


  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', this.handleStorageChange);
    }
  }

  handleStorageChange = (event: StorageEvent) => {
    if (event.key === 'authToken' && typeof window !== 'undefined') {
      this.authToken = window.localStorage.getItem('authToken') || null;
    }
  };

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignIn() {
    this.router.navigate(['/register']);
  }
  goToAccount() {
    this.router.navigate(['/account']);
  }
  goTo(target : string) {
    this.router.navigate([`/${target}`]);
  }
  scrollToFooter() {
    const footer = document.getElementById('main_footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
