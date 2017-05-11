import { Component, ViewContainerRef } from '@angular/core';
import { WineryAlertService } from './alerts/wineryAlert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(vcr: ViewContainerRef, private notify: WineryAlertService) {
    this.notify.init(vcr);
  }

}
