import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const auth = inject(Auth); // Inject Firebase Auth
  const router = inject(Router); // Inject Router

  return new Observable((observer) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        observer.next(true); // Allow access
      } else {
        observer.next(false);
        router.navigate(['/']); // Redirect to login if not authenticated
      }
      observer.complete();
    });
  });
};
