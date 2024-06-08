import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { fullpageApi, fullpageOptions } from 'fullpage.js/dist/fullpage.extensions.min';
import { ScrollService } from '../../../services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements AfterViewInit{
  config: fullpageOptions;
  fullpageApi!: fullpageApi;

  constructor(private scrollService: ScrollService){
    this.config = {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
      menu: '#menu',
      scrollOverflow: true,
      sectionsColor: ['#ffffff', '#000000', '#ffffff', '#1d1d1d'],
      credits: {
        enabled: false,
      }
    };
  }
  ngAfterViewInit(): void {
    this.scrollService.$scrollTop.subscribe(() =>{
      this.fullpageApi.moveTo(1);
    })
  }
  getRef(fullPageRef: fullpageApi) {
    this.fullpageApi = fullPageRef;
  }
}
