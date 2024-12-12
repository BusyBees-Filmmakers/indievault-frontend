import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), MessageService, provideFirebaseApp(() => initializeApp({"projectId":"indievault-a17b9","appId":"1:698981784269:web:053b28093b69989cf06784","storageBucket":"indievault-a17b9.firebasestorage.app","apiKey":"AIzaSyB0139fOO6JaIKsc8irq9XbU9-HMnUk_2M","authDomain":"indievault-a17b9.firebaseapp.com","messagingSenderId":"698981784269"})), provideAuth(() => getAuth())]
};
