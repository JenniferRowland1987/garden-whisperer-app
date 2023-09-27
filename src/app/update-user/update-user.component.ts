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

  id: number = 0;

  constructor(private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute,
    ){}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const paramName = params.get('id');
      if (paramName !== null) {
        this.id = +paramName;
        console.log(this.id)

        this.id;       
      }
    });
  }

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


  onSubmit() {
    this.userService.updateUser(this.id).subscribe((response) => {
      console.log(this.id)
      console.log('User updated successfully!', response);     
      
      this.router.navigate(['/garden', this.userService.getUserID()])
      }
    );
  }



}
