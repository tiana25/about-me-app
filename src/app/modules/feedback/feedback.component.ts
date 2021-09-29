import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from '../../Feedback';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  showAddFeedback:boolean = false;
  subscription!:Subscription;

  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService, private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddFeedback = value)
   }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe((feedbacks)=>(this.feedbacks = feedbacks));
  }

  deleteFeedback(feedback: Feedback){
    this.feedbackService
      .deleteFeedback(feedback)
      .subscribe(()=>(
      this.feedbacks = this.feedbacks.filter((f) => f.id  !== feedback.id)));
  }

  addFeedback(feedback:Feedback){
    this.feedbackService.addFeedback(feedback).subscribe(
      (feedback)=>(this.feedbacks.push(feedback)));
  }

  toggleAddFeedback(){
    this.uiService.toggleAddFeedback();
  }

}
