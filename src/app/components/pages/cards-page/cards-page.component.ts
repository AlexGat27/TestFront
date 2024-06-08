import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.css'
})
export class CardsPageComponent {
  range: undefined[] = Array.from({ length: 20 });
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;

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
}
