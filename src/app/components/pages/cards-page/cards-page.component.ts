import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.css'
})
export class CardsPageComponent{
  range: undefined[] = Array.from({ length: 20 });
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;

  constructor(private scrollService: ScrollService){
  }

  scrollLeft() {
    const container: HTMLDivElement = this.container.nativeElement;
    container.scrollTo({
      left: container.scrollLeft - container.clientWidth / 2 ,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    const container: HTMLDivElement = this.container.nativeElement;
    container.scrollTo({
      left: container.scrollLeft + container.clientWidth / 2,
      behavior: 'smooth'
    });
  }

  moveNext(){
    this.scrollService.scrollNext();
  }
}
