// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import {initializeApp} from "@angular/fire/app";

const firebaseConfig = {
  apiKey: "AIzaSyA32Kr40zOr3bvMWrFgMi0Mj_y8OPc5ZBI",
  authDomain: "homecook-76d10.firebaseapp.com",
  projectId: "homecook-76d10",
  storageBucket: "homecook-76d10.firebasestorage.app",
  messagingSenderId: "466948575345",
  appId: "1:466948575345:web:5647cf8b1a0c2fd56e0bd0",
  measurementId: "G-TJ4B182SNG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // Aseguramos que no inicie como undefined o null
  private authTokenSubject = new BehaviorSubject<string | null>(
    typeof window !== 'undefined' ? localStorage.getItem('authToken') : null
  );
  authToken$ = this.authTokenSubject.asObservable();

  setAuthToken(token: string | null) {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
    this.authTokenSubject.next(token);
  }


  login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  logout() {
    return signOut(auth);
  }
}
