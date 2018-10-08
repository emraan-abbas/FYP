import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import RecordRTC from 'recordrtc';
import { VideoService } from "../video.service";
import { ChannelService } from "../channel.service";
@Component({
  selector: 'app-creating-video',
  templateUrl: './creating-video.component.html',
  styleUrls: ['./creating-video.component.scss']
})
export class CreatingVideoComponent implements OnInit {

  private stream: MediaStream;
  private recordRTC: any
  tags = [];
  @ViewChild('video') video: any
  constructor(
    private videoService:VideoService,
    private channelService:ChannelService
  ) { }

  ngOnInit() {
    // this.video = this.videoElement.nativeElement;
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {

    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      bitsPerSecond: 62800000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }

  startRecording() {
    let mediaConstraints = {
      video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        }
      }, audio: true
    };
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));


  }
  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }
  download() {
    var blob = this.recordRTC.getBlob()
    var file = new File([blob], "video.webm", {
      type: 'video/webm'
  });
    var formData = new FormData();
      formData.append('file', file);
    this.videoService.addVideo(formData).subscribe(res=>{
      let fileName = res;
      console.log("Success!");
      let vid = {
        tags : [],
        date : Date.now(),
        path : "../videos/"+ fileName,
        channelId : localStorage.getItem('UserId')
      }
      vid.tags = this.tags
            
    },err=>{
      console.log(err)
    })
  }
}

