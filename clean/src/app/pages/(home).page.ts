import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'clean-home',
  
  imports: [AnalogWelcomeComponent],
  template: `
     <clean-analog-welcome/>
  `,
})
export default class HomeComponent {
}
