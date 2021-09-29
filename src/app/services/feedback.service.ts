import { Injectable } from '@angular/core';
import { Feedback } from '../Feedback';
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

  private apiUrl = 'http://localhost:5000/feedbacks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiUrl)
  }

  deleteFeedback(feedback:Feedback):Observable<Feedback>{
    const url = `${this.apiUrl}/${feedback.id}`;
    return this.http.delete<Feedback>(url);
  }

  addFeedback(feedback: Feedback):Observable<Feedback>{
    return this.http.post<Feedback>(this.apiUrl, feedback, httpOptions)
  }

}
