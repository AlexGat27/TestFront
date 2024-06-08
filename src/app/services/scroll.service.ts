import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollTopSubject = new BehaviorSubject<string>("");
  $scrollTop = this.scrollTopSubject.asObservable();

  scrollTop(){
    this.scrollTopSubject.next("top");
  }
  scrollBottom(){
    this.scrollTopSubject.next("bottom");
  }
}
