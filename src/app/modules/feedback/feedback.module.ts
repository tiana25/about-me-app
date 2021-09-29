import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedbackItemComponent } from './feedback-item/feedback-item.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';

@NgModule({
  declarations: [
    FeedbackComponent,
    FeedbackItemComponent,
    AddFeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    MatCardModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class FeedbackModule { }
