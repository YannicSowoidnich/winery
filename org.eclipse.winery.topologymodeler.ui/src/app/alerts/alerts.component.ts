import { Component, Input, NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [AlertModule.forRoot()]
})

@Component({
  selector: 'app-alerts-component',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent {
  @Input() type: string;
  @Input() dismissOnTimeout: string;

  public alerts = new Array<AlertMessage>();

  public showAlert(style_type: string, message: string) {

    this.alerts.push(
      new AlertMessage(style_type, message)
    );

  }
}
export class AlertMessage {
  type: string;
  msg: string;
  timeout = 5000;
  dismissible = true;

  constructor(type: string, msg: string) {
    this.type = type;
    this.msg = msg;
  }
}
