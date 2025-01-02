import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  // Add or update user details
  setUserDetails(uid: string, userDetails: any) {
    return this.firestore.collection('user_details').doc(uid).set(userDetails, { merge: true });
  }

  // Get user details by UID
  getUserDetails(uid: string) {
    return this.firestore.collection('user_details').doc(uid).valueChanges();
  }
}
