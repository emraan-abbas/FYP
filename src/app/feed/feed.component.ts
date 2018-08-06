import { Component, OnInit } from '@angular/core';
import { VideoService } from './../video.service';
import  {Router} from '@angular/router';




@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  videos;
  constructor(private videoService: VideoService,
            private router:Router) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(res =>{
      this.videos =res;
      console.log(this.videos);

    })

  }

  mychannel(){
    this.router.navigateByUrl("/channel");

  }

}
