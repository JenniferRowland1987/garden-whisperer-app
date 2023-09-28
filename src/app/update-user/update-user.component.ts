import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from '../models/user.model';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  user: UserInfo = {
    id: 0,
    name: '',
    userName: '',
    password: '',
    city: '',
  };

  updateUser: UserInfo = {
    id: 0,
    name: '',
    userName: '',
    password: '',
    city: '',
  };

  constructor(
    private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute,
   
    ){}

  ngOnInit() {
    this.setUser();         
  }

  setUser(){
    this.userService.getUser(this.userService.getUserID()).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user)

        this.updateUser = {...this.user};
      },
      (error) => {
        console.error('error getting user profile', error);
      }
    );
  }

  updateTheUser(){
    this.userService.updateUser(this.user.id, this.updateUser).subscribe(
      (data)=> {
        console.log('user updated successfully', data)
        this.router.navigate(['/user-details']);
      },
      (error)=>{
        console.error('error updating the user dude', error)
      }
    );
  }

  onSubmit(){
    if(!this.updateUser.name || !this.updateUser.userName || !this.updateUser.password || !this.updateUser.city){
      this.updateUser = {...this.user};
    }else{
      this.updateTheUser();
    }
    
  }
  








}
