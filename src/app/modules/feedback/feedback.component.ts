import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from '../../Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getTasks().subscribe((feedbacks)=>(this.feedbacks = feedbacks));
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


}
