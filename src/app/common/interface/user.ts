export interface User {
  id: number; // Numeric ID for internal usage
  uid: string; // Unique user ID from Firebase
  firstName: string; // User's first name
  lastName: string; // User's last name
  email: string; // User's email address
  profileImageUrl: string; // URL to the user's profile image
  displayName?: string; // Optional: Full name as displayed by Google
  subscriptionType: "filmmaker" | "viewer"; // User's subscription type
}
