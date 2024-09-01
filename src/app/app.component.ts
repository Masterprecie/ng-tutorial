import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbar,
    HeaderComponent,
    FormsModule,
    NgIf,
    NgTemplateOutlet,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Hello Precious User';
  imageURL: string =
    'https://static-00.iconduck.com/assets.00/angular-icon-2048x2048-24b236vf.png';
  isDiasbled: boolean = true;
  isActive: boolean = true;
  fruitName: string = 'apple';
  buttonClick() {
    console.log('button clicked');
  }
  keyEnter(event: any) {
    if (event.keyCode === 13) {
      console.log('Enter Key pressed');
    }
  }

  keyupFiltering(user: HTMLInputElement) {
    console.log(user.value);
  }
  // userName: string = 'John Doe';

  updateUserName(username: HTMLInputElement) {
    this.userName = username.value;
    console.log(this.userName);
  }

  isLoggedIn: boolean = false;
  userName: string = 'John Doe';

  loginCounter: number = 0;

  userRole: string = 'admin';

  countLoginAttempt() {
    this.loginCounter++;
    console.log(this.loginCounter);
    // if (this.loginCounter > 3) {
    //   this.isLoggedIn = true;
    // }
  }

  users: Array<string> = ['John', 'Jane', 'Mary', 'Jane'];

  userObj: Array<any> = [
    { id: 1, name: 'John', email: 'john@gmail.com ' },
    { id: 2, name: 'Smit', email: 'smit@gmail.com ' },
    { id: 3, name: 'Joel', email: 'joel@gmail.com ' },
  ];

  addNewUser() {
    let user = {
      id: 5,
      name: 'presh',
      email: 'presh@gmail.com',
    };

    this.userObj.push(user);
  }

  // onDelete(user: object) {
  //   let index = this.userObj.indexOf(user);
  //   this.userObj.splice(index, 1);
  // }
  onDelete(index: number) {
    this.userObj.splice(index, 1);
  }
}
