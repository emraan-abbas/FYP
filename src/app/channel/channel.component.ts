import { Component, OnInit } from '@angular/core';
import { ChannelService } from './../channel.service';
import  {Router} from '@angular/router';



@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  videos;
  id;
  constructor(private channelService: ChannelService,
    private router:Router) {
   }

  ngOnInit() {
    this.id = localStorage.getItem('UserId');
    this.channelService.getChannelByUserId(this.id).subscribe(res=>{
      this.videos =res;
      console.log(this.videos[0]);
    })
  }

  settings(){
    this.router.navigateByUrl("channel/settings");
  }

}
