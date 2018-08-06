import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import  {Router} from '@angular/router';


@Component({
  selector: 'app-channel-settings',
  templateUrl: './channel-settings.component.html',
  styleUrls: ['./channel-settings.component.scss']
})
export class ChannelSettingsComponent implements OnInit {

  user = {
    first_name:"",
    last_name:'',
    pass:'',
    new_pass:'',
    email:'',
    number:''
  }
  data;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('UserId')).subscribe(res=>{
      this.data=res;
      this.user.first_name = this.data.first_name;
      this.user.last_name = this.data.last_name;
      this.user.pass = this.data.pass;
      this.user.new_pass = this.data.new_pass;
      this.user.email = this.data.email;
      this.user.number = this.data.number;
    })
  }
  edit(){
    this.data.first_name=this.user.first_name;
   this.data.last_name=this.user.last_name; 
   this.data.pass=this.user.pass;
   this.data.new_pass=this.user.new_pass;
   this.data.email=this.user.email;
   this.data.number=this.user.number;

    console.log(this.user);
    this.userService.updateUser(this.user,localStorage.getItem('UserId')).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('/channel');
    })
    
  }

}
