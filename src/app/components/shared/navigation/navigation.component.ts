import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';
declare var fullpage: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private scrollService: ScrollService){}

  scrollTop(){
    this.scrollService.scrollTop();
  }
}
