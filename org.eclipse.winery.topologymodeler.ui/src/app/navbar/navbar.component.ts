import {Component, OnInit} from '@angular/core';
import { AlertsComponent } from 'app/alerts/alerts.component';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {

  alert = new AlertsComponent();
  constructor() {

  }

  public showSaveAlert(event): void {
    this.alert.showAlert('info', 'test');

  }




  ngOnInit() {
  }
}
