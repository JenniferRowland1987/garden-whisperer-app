import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loginFail: boolean = false;
  mushroomUrl: string = 'assets/transparentmushroom.png';

  constructor(private userService: UserService){}

  login(){
    this.userService.getAllUsers().subscribe(users => {
      const user = users.find((u: any) => u.username == this.username && u.password == this.password);

      if(user){
        this.userService.userID = user.id;
        //send user to garden
        //this.router.navigate(['/garden'])

      }else{
        this.loginFail = true;
        this.mushroomUrl = 'assets/badrequestmushroom.png';
        //send user to login failure to either prompt to create or try login again
      }
    });
  }
  
}




