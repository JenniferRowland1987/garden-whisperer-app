import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserInfo } from '../models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user: UserInfo ={
    id: 0,
    name: '',
    userName: '',
    password: '',
    city: '',
  };

  constructor(private userService: UserService, private router: Router){}
  
  onSubmit() {
    this.userService.checkUserNameIsTaken(this.user.userName).subscribe(
      (isAvailable) => {
        if (isAvailable) {
          this.createUser();
        } else {
          alert('Username is already in use!');
        }
      }
    );
  }

  createUser(){
    this.userService.createUser(this.user).subscribe(
      () => {
        this.router.navigate(['/login']);
      }
    )
  }

}
