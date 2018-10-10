import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';


@Injectable({
  providedIn: 'root'
})
export class VideoService {


  constructor(private http:HttpClient) { 
    
  }
  getVideos(){
    return this.http.get("http://localhost:3000/video");

  }

  getVideoByUserId(userid){
    return this.http.get("http://localhost:3000/video/user/" + userid);
  }

  saveVideo(video){
    return this.http.post("http://localhost:3000/video/save/" , video);
    
  }

  addVideo(vid){
    return this.http.post("http://localhost:3000/video/add/" , vid);
  }

}