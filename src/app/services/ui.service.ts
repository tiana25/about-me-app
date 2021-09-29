import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddFeedback:boolean = false;
  private subject = new Subject<any>();

  constructor() { }


  toggleAddFeedback(): void {
    this.showAddFeedback = !this.showAddFeedback;
    this.subject.next(this.showAddFeedback);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

}
