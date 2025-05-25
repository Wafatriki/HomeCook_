import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonNote,
  IonButton
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonNote,
    IonButton,
    HeaderComponent
  ]
})
export class LoginPage {
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    const { username, password } = form.value;

    if (form.invalid) return;

    this.authService.login(username, password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.errorMessage = 'Credenziali non valide. Riprova.';
        console.error(error);
      });
  }

  // Métodos para cargar templates (opcional)
  loadTemplate(fileName: string, id: string, callback?: () => void): void {
    fetch(fileName)
      .then((res) => {
        if (!res.ok) throw new Error(`Error al cargar el archivo: ${res.statusText}`);
        return res.text();
      })
      .then((text) => {
        const element = document.getElementById(id);
        if (element) element.innerHTML = text;
        if (callback) callback();
      })
      .catch((error) => console.error('Error al cargar el template:', error));
  }

  loadTemplateFromSource(source: string, id: string): void {
    this.loadTemplate(source, id);
  }
}
