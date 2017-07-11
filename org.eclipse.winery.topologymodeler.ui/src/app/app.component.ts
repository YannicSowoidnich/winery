import { Component, ViewContainerRef } from '@angular/core';
import { WineryAlertService } from './winery-alert/winery-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pressedNavBarButton: any;
  pressedPaletteItem: string;
  private instanceNumber = 1;

  constructor(vcr: ViewContainerRef, private notify: WineryAlertService) {
    this.notify.init(vcr);
  }

  sendPressedNavBarButtonToCanvas($event): void {
      this.pressedNavBarButton = $event;
  }

  sendPressedPaletteItem($event): void {
    this.pressedPaletteItem = $event;
  }
}
