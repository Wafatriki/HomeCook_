import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from "./app/app.routes";
import { provideRouter } from "@angular/router";
import { defineCustomElements } from '@ionic/core/loader';
const firebaseConfig = {
  apiKey: "AIzaSyA32Kr40zOr3bvMWrFgMi0Mj_y8OPc5ZBI",
  authDomain: "homecook-76d10.firebaseapp.com",
  projectId: "homecook-76d10",
  storageBucket: "homecook-76d10.firebasestorage.app",
  messagingSenderId: "466948575345",
  appId: "1:466948575345:web:5647cf8b1a0c2fd56e0bd0",
  measurementId: "G-TJ4B182SNG"
};
defineCustomElements(window);
const app = initializeApp(firebaseConfig);
bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => app),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRouter(routes),
  ]
}).catch(err => console.error(err));
