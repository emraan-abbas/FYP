import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';
import { FeedbackService } from '../feedback.service';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackData;
  constructor(private feedbackService:FeedbackService,private router:Router) { }



  ngOnInit() {
  }



  feedback(){
    console.log(this.feedback);
    this.feedbackService.createFeedback(this.feedbackData).subscribe(res =>{
      console.log("success");
      console.log(res);
    
   



    this.router.navigateByUrl("/feed");
  })
}

}