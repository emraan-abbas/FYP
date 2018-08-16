import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-creating-video',
  templateUrl: './creating-video.component.html',
  styleUrls: ['./creating-video.component.scss']
})
export class CreatingVideoComponent implements OnInit {

  @ViewChild('videoElement') videoElement: any;  
  @ViewChild('playVideoElement') playvideoElement: any;  
  video: any;
  displayControls;
  constructor() { }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }

  play(){
    this.playvideoElement.play(this.video);
  }
  
   sound() {
    this.initCamera({ video: true, audio: true });
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }
  
    initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

}
