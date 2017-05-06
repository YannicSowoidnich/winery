import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  public showSaveAlert($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    alert('Saved...');
  }

  ngOnInit() {
  }
}
