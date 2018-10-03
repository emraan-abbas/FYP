import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http:HttpClient) { }

  registerChannel(channel){
    console.log(channel);
    
    return this.http.post("http://localhost:3000/channel/add",channel);
  }
}

