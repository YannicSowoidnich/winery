import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedNodeNavbarService {

  // Observable string sources
  private visible = new Subject<string>();
  // Observable string streams
  visible$ = this.visible.asObservable();

  constructor() { }

  // Service message commands
  publishData(data: string) {
    this.visible.next(data);
  }

}
