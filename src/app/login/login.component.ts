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
  

  constructor(private userService: UserService, private router: Router){}

  login() {

    console.log('Attempting username:', this.username, 'and password:', this.password);
  
    this.userService.getAllUsers().subscribe(users => {

      console.log('Users from service:', users);
  
      const user = users.find((u: any) => u.userName === this.username && u.password === this.password);
  
      if (user) {
        console.log('Login successful! User ID:', user.id);
        this.userService.userID = user.id;
        this.router.navigate(['/garden', user.id]);
      } else {
        console.log('Login failed.');
        this.loginFail = true;
        this.mushroomUrl = 'assets/badrequestmushroom.png';
      }
    });
  }
  
}




