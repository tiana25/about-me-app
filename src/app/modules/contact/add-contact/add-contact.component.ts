import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() onAddContact:EventEmitter<Contact> = new EventEmitter();

  name!: string;
  email!:string;
  message!:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.message){
      alert('Please add a message!');
      return;
    }

    const newContact = {
      name:this.name,
      email: this.email,
      message:this.message
    }

    this.onAddContact.emit(newContact);

    this.name="";
    this.email="";
    this.message="";

  }

}
