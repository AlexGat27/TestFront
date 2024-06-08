import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollTopSubject = new BehaviorSubject<null>(null);
  $scrollTop = this.scrollTopSubject.asObservable();

  sendEvent(){
    this.scrollTopSubject.next(null);
  }
}
