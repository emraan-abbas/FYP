import { Component, OnInit } from '@angular/core';
import { VideoService } from './../video.service';
import  {Router} from '@angular/router';



@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  videos;
  id;
  constructor(private videoService: VideoService,
    private router:Router) {
    this.id = localStorage.getItem('UserId');
   }

  ngOnInit() {
    this.videoService.getVideoByUserId(this.id).subscribe(res =>{
      this.videos =res;
      console.log(this.videos);
    },err => {
      console.log(err);
      
    })
    
  }

  settings(){
    this.router.navigateByUrl("channel/settings");

  }

}
