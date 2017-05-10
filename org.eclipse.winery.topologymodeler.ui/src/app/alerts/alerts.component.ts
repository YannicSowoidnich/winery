import {Component, Input, NgModule} from '@angular/core';
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

  public alerts: any = [];

  public showAlert(style_type: string, message: string): any {
    this.alerts.push({
      type: style_type,
      msg: message,
      timeout: 5000,
      dismissible: true
    });
    console.log(this.alerts[0].msg)
  }
}
