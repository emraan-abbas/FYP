import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = {
    first_name:"",
    last_name:'',
    pass:'',
    email:'',
    dob:'',
    number:'',
    country:'',
    gender:''
  }
  loginUser = {
    pass:'',
    email:''
  }
added;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  add(){
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe(res =>{
      console.log("success");
      console.log(res);
    },err =>{
      console.log("Error");
      console.log(err);
    })
  }

  login(){
    console.log(this.loginUser);
    this.userService.login(this.loginUser).subscribe(res =>{
     this.added=res;
      console.log("success");
      console.log(this.added.token);
      localStorage.setItem('Token',this.added.token);
    },err=>{
      console.log("Error");
      console.log(err);
      
      
    })
  }

}
