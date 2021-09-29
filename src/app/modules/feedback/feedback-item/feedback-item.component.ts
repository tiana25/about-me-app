import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Feedback } from 'src/app/Feedback';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent implements OnInit {

  @Input()feedback!: Feedback;
  @Output() onDeleteFeedback: EventEmitter<Feedback> = new EventEmitter()

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(feedback:Feedback){
    console.log(feedback);
    this.onDeleteFeedback.emit(feedback)
  }

}
