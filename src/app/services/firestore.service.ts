import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  // === User Details Service Methods ===

  // Add or update user details
  setUserDetails(uid: string, userDetails: any) {
    return this.firestore.collection('user_details').doc(uid).set(userDetails, { merge: true });
  }

  // Get user details by UID
  getUserDetails(uid: string) {
    return this.firestore.collection('user_details').doc(uid).valueChanges();
  }

  // === Movie Metadata Service Methods ===

  // Add a new movie document
  addMovieMetadata(movie: any) {
    return this.firestore.collection('movie_metadata').add(movie);
  }

  // Get all movies
  getAllMovies() {
    return this.firestore.collection('movie_metadata').snapshotChanges();
  }

  // Get movies for a specific owner
  getMoviesByOwner(ownerId: string) {
    return this.firestore.collection('movie_metadata', ref =>
      ref.where('owner_id', '==', ownerId)
    ).snapshotChanges();
  }

  // Get a specific movie by playback_id
  getMovieByPlaybackId(playbackId: string) {
    return this.firestore.collection('movie_metadata', ref =>
      ref.where('playback_id', '==', playbackId)
    ).snapshotChanges();
  }

   // === Review Service Methods ===
  // Add a new review
  addReview(review: any) {
    return this.firestore.collection('review').add(review);
  }

  // Get all reviews for a specific movie by playback_id
  getReviewsByPlaybackId(playbackId: string) {
    return this.firestore.collection('review', ref =>
      ref.where('playback_id', '==', playbackId)
    ).snapshotChanges();
  }

  // Update a specific review
  updateReview(reviewId: string, updatedContent: any) {
    return this.firestore.collection('review').doc(reviewId).update(updatedContent);
  }

  // Delete a specific review
  deleteReview(reviewId: string) {
    return this.firestore.collection('review').doc(reviewId).delete();
  }
}
