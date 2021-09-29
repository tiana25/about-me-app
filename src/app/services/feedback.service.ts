import { Injectable } from '@angular/core';
import { Feedback } from '../Feedback';
import { Contact } from '../Contact';
import { FEEDBACKS } from 'src/app/mock-feedback';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  readonly apiUrl = 'http://localhost:5000/feedbacks'
  readonly apiUrl2 = 'http://localhost:5000/contacts'

  constructor(private http:HttpClient) { }

  getFeedbacks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiUrl)
  }

  deleteFeedback(feedback:Feedback):Observable<Feedback>{
    const url = `${this.apiUrl}/${feedback.id}`;
    return this.http.delete<Feedback>(url);
  }

  addFeedback(feedback: Feedback):Observable<Feedback>{
    return this.http.post<Feedback>(this.apiUrl, feedback, httpOptions)
  }

  addContact(contact: Contact):Observable<Contact>{
    return this.http.post<Contact>(this.apiUrl2, contact, httpOptions)
  }

}
