import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseError } from 'firebase/app';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
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
    IonButton
  ],
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  passwordMismatch: boolean = false;

  async onSubmit(form: any) {
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
      console.log('Usuario registrado:', userCredential.user);
    } catch (error: any) {
      this.errorMessage = error.message || 'Error desconocido';
      console.error('Error en el registro:', error);
    }
  }
}
