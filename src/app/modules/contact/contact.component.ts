import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Contact';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit(): void {
  }
  addContact(contact:Contact){
    this.feedbackService.addContact(contact).subscribe(
      (contact)=>(this.contacts.push(contact)));
  }
}
