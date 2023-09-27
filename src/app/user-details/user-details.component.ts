import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: UserInfo ={
    id: 0,
    name:'',
    userName: '',
    password: '',
    city: '',
  };

  constructor(
    private userService: UserService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.userService.getUser(this.userService.getUserID()).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user)
      },
      (error) => {
        console.error('error getting user profile', error);
      }
    )
  }

  navigateToGarden(){
    this.router.navigate(['/garden', this.userService.getUserID()]);
  }

  navigateToUpdateUser(){
    this.router.navigate(['/update-user']);
  }

}
