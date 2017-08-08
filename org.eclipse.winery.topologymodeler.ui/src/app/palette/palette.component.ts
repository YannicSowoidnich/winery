import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PaletteService } from '../palette.service';
import {PaletteItemModel} from '../models/paletteItem.model';
import {PaletteActions} from '../redux/actions/palette.actions';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../redux/store/app.store';

@Component({
  selector: 'app-palette-component',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css'],
  providers: [PaletteService],
  animations: [
    trigger('paletteRootState', [
      state('shrunk', style({
        height: '100px',
        width: '40px',
      })),
      state('extended', style({
        height: '40px',
        width: '100%',
      })),
      transition('shrunk => extended', animate('200ms ease-out')),
      transition('extended => shrunk', animate('200ms ease-out'))
    ]),

    trigger('paletteRootTextState', [
      state('shrunk', style({
        transform: 'rotate(270deg)',
        textAlign: 'center',
        marginTop: '40px',
      })),
      state('extended', style({
        textAlign: 'center',
        marginTop: '0px',
        transform: 'rotate(360deg)',
      })),
      transition('shrunk => extended', animate('200ms ease-out')),
      transition('extended => shrunk', animate('200ms ease-out'))
    ]),

    trigger('paletteItemState', [
      state('shrunk', style({
        display: 'none',
        opacity: '0',
        width: '40px',
      })),
      state('extended', style({
        display: 'block',
        opacity: '1',
        width: '100%',
      })),
      transition('shrunk => extended', animate('200ms ease-out')),
      transition('extended => shrunk', animate('200ms ease-out'))
    ])
  ]
})
export class PaletteComponent implements OnInit, OnChanges, OnDestroy {
  detailsAreHidden = true;
  paletteRootState = 'shrunk';
  paletteItems = [];
  paletteStatus: any;
  subscription;

  constructor(private paletteService: PaletteService,
              private ngRedux: NgRedux<AppState>,
              private actions: PaletteActions) {
    this.subscription = ngRedux.select<any>('paletteOpened')
      .subscribe(newPaletteOpenedState => this.updateState());
    this.paletteItems = paletteService.getPaletteData();
  }

  updateState() {
    if (this.paletteRootState = 'extended') {
      this.toggleRootState();
    }
  }

  ngOnInit() {
  }

  public openPalette(): void {
    this.detailsAreHidden = false;
    this.toggleRootState();

  }

  public toggleRootState(): void {
    if (this.paletteRootState === 'shrunk') {
      this.paletteRootState = 'extended';
      this.paletteStatus = {
        Open: true
      };
      // this.adjustGridSizeToPalette.emit(this.paletteStatus);
      this.ngRedux.dispatch(this.actions.enhanceGrid(true));

    } else {
      this.paletteRootState = 'shrunk';
      this.paletteStatus = {
        Open: false
      };
      // this.adjustGridSizeToPalette.emit(this.paletteStatus);
      this.ngRedux.dispatch(this.actions.enhanceGrid(false));
    }
  }

  publishTitle($event): void {
    const left = ($event.pageX - 100).toString().concat('px');
    const top = ($event.pageY - 30).toString().concat('px');
    const name = $event.target.innerHTML;
    const pressedPaletteItem: PaletteItemModel = {
      name: name,
      mousePositionX: left,
      mousePositionY: top
    };
    this.ngRedux.dispatch(this.actions.createPaletteItem(pressedPaletteItem));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.paletteRootState = 'extended') {
      this.toggleRootState();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


