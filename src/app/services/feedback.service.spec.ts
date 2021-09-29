
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { Feedback } from '../Feedback';
import { Contact } from '../Contact';
import { HttpResponse  } from '@angular/common/http';
import { FeedbackService } from './feedback.service';


describe('FeedbackService', () => {

  let service: FeedbackService;
  let httpMock: HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[FeedbackService]
    });

    service = TestBed.get(FeedbackService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should retrieve feedbacks from the API via GET',()=>{
    const dummyFeedbacks:Feedback[] = [
      {id:5, name:"Katia", job:"BA specialist", feedback:"Great job:)"},
      {id:6, name:"Masha", job:"tester", feedback:"Amazing:)"},
    ];

    service.getFeedbacks().subscribe(feedbacks =>{
      expect(feedbacks.length).toBe(2);
      expect(feedbacks).toEqual(dummyFeedbacks)
    });

    const req = httpMock.expectOne(`${service.apiUrl}`);

    expect(req.request.method).toBe('GET');

    req.flush(dummyFeedbacks);

  })

  it('should add a feedback via POST and return it',()=>{

    const newFeedback:Feedback = {id:7, name:"Marina", job:"backend dev", feedback:"Cool!"}

    service.addFeedback(newFeedback).subscribe(feedback =>{
      expect(feedback).toEqual(newFeedback,'should return the feedback'),
      fail
    })

    // addFeedback should have made one request to POST feedback
    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newFeedback);

    // Expect server to return the feedback after POST
    //DOES IT WORK??
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newFeedback });
    req.event(expectedResponse);

  })

  it('should add a contact via POST and return it',()=>{

    const newContact:Contact = {id:10, name:"Lilya", email:"liliia@gmail.com", message:"Let's collaborate!"}

    service.addContact(newContact).subscribe(contact =>{
      expect(contact).toEqual(newContact,'should return the feedback'),
      fail
    })

    // addContact should have made one request to POST contact
    const req = httpMock.expectOne(`${service.apiUrl2}`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newContact);

    // Expect server to return the contact after POST
    //DOES IT WORK??
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newContact });
    req.event(expectedResponse);

  })

  it('should delete a feedback via DELETE and return it', ()=>{
    const delFeedback:Feedback = {id:3, name:"Karina", job:"frontend dev", feedback:"Good!"}


    service.deleteFeedback(delFeedback).subscribe(feedback=>{
        expect(feedback).toEqual(delFeedback,'should return the deleted feedback');
    })

    const req = httpMock.expectOne(`${service.apiUrl}/${delFeedback.id}`);

    expect(req.request.method).toBe('DELETE');

    req.flush(delFeedback);

  })

});
