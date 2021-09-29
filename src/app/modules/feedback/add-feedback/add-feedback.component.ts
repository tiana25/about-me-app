import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Feedback } from 'src/app/Feedback';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  showAddFeedback!:boolean;
  subscription!: Subscription;

  @Output() onAddFeedback:EventEmitter<Feedback> = new EventEmitter();

  name!: string;
  job!:string;
  feedback!:string;

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddFeedback = value);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.feedback){
      alert('Please add a feedback!');
      return;
    }

    const newFeedback = {
      name:this.name,
      job: this.job,
      feedback:this.feedback
    }

    this.onAddFeedback.emit(newFeedback);

    this.name="";
    this.job="";
    this.feedback="";

  }

}
