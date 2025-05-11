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

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
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
    IonButton
  ]
})
export class RegisterPage {
  constructor(private authService: AuthService, private router: Router) {}

  passwordMismatch: boolean = false;
  errorMessage: string | null = null;

  onSubmit(form: NgForm): void {
    const { username, password, nuevaPassword } = form.value;

    // Validar si las contraseñas coinciden
    this.passwordMismatch = password !== nuevaPassword;

    if (form.invalid || this.passwordMismatch) {
      return;
    }

    // Lógica de registro
    this.authService.register(username, password)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.errorMessage = error;
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
