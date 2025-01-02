import { Injectable } from '@angular/core';
import {User} from "../../common/interface/user";
import {AuthService} from "../authentication/auth.service";



@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDatabase: User[] = [
    {
      id: 1,
      uid: "6523d73a-2d07-424c-a068-9f71c9297a97",
      firstName: "Harrison",
      lastName: "Jones",
      email: "harrison.jones@gmail.com",
      profileImageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
      displayName: "Harrison Jones",
      subscriptionType: "filmmaker",
    }];

  constructor(private readonly authService: AuthService) { }

  getCurrentUser() {
    let fireUser = this.authService.getCurrentFireUser();
    return this.getUserByUid(fireUser!.uid);
  }

  setUser(user: User) {
    this.userDatabase.push(user);
  }

  getUserById(id: number) {
    return this.userDatabase.find(user => user.id === id);
  }

  getUserByEmail(email: string) {
    return this.userDatabase.find(user => user.email === email);
  }

  getUserByUid(uid: string) {
    return this.userDatabase.find(user => user.uid === uid);
  }

  convertFireUserToUser(fireUser: any, subscriptionType: "filmmaker" | "viewer"): User {
    return {
      id: this.userDatabase.map(user => user.id).reduce((a, b) => Math.max(a, b)) + 1,
      uid: fireUser.uid,
      firstName: fireUser.displayName.split(' ')[0],
      lastName: fireUser.displayName.split(' ')[1],
      email: fireUser.email,
      profileImageUrl: fireUser.photoURL,
      displayName: fireUser.displayName,
      subscriptionType: subscriptionType
    };
  }

}
