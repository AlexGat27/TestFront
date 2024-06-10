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
  countSections: number = 4;

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
    this.scrollService.$scrollTop.subscribe(direction =>{
      switch(direction){
        case "top":
          this.fullpageApi.moveTo(1);
          break;
        case "bottom":
          this.fullpageApi.moveTo(this.countSections);
          break;
        case "next":
          this.fullpageApi.moveSectionDown();
          break;
        default:
          console.error("Такой команды нет");
          break;
      }
    })
  }
  getRef(fullPageRef: fullpageApi) {
    this.fullpageApi = fullPageRef;
  }
}
