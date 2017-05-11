import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { WineryAlertService } from 'app/alerts/wineryAlert.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
  constructor(private alert: WineryAlertService) {}

  public showSaveAlert(): void {
    this.alert.success('Successfully saved!');
  }

  ngOnInit() {
  }
}
