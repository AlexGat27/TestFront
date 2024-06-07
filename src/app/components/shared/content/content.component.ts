import { Component, Input } from '@angular/core';
import { fullpageApi, fullpageOptions } from 'fullpage.js/dist/fullpage.extensions.min';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  config: fullpageOptions;
  fullpageApi!: fullpageApi;

  constructor(){
    this.config = {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      scrollOverflow: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      credits: {
        enabled: false,
      },

      // events callback
      afterLoad: (origin, destination, direction) => {
        console.log(destination);
      },
      afterRender: () => {
        console.log('afterRender');
      },
      afterResize: (width, height) => {
        console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        console.log(destination);
      }
    };
  }
  getRef(fullPageRef: fullpageApi) {
    this.fullpageApi = fullPageRef;
  }
}
