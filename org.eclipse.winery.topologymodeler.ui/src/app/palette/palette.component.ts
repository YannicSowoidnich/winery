import {Component, EventEmitter, Inject, OnChanges, OnInit, Output} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PaletteService } from '../palette.service';
import * as Redux from 'redux';
import {createPaletteItem} from '../redux/actions/paletteItem.actions';
import {PaletteItem} from '../redux/models/paletteItem.model';
import {getPaletteOpened, PaletteOpenedState} from '../redux/reducers/paletteState.reducer';
import {PaletteItemStore} from '../redux/stores/paletteItem.store';
import {PaletteOpenedStore} from '../redux/stores/paletteOpened.store';
import {PaletteItemState} from '../redux/reducers/paletteItem.reducer';

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
export class PaletteComponent implements OnInit {
  detailsAreHidden = true;
  paletteRootState = 'shrunk';
  paletteItems = [];
  @Output() adjustGridSizeToPalette: EventEmitter<any>;
  paletteStatus: any;

  constructor(private paletteService: PaletteService,
              @Inject(PaletteItemStore) private storePaletteItem: Redux.Store<PaletteItemState>,
              @Inject(PaletteOpenedStore) private storePaletteOpened: Redux.Store<PaletteOpenedState>) {
    storePaletteOpened.subscribe(() => this.updateState());
    this.paletteItems = paletteService.getPaletteData();
    this.adjustGridSizeToPalette = new EventEmitter();
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
      this.adjustGridSizeToPalette.emit(this.paletteStatus);
    } else {
      this.paletteRootState = 'shrunk';
      this.paletteStatus = {
        Open: false
      };
      this.adjustGridSizeToPalette.emit(this.paletteStatus);
    }
  }

  publishTitle($event): void {
    const left = ($event.pageX - 100).toString().concat('px');
    const top = ($event.pageY - 30).toString().concat('px');
    const name = $event.target.innerHTML;
    const pressedPaletteItem: PaletteItem = {
      name: name,
      mousePositionX: left,
      mousePositionY: top
    };
    this.storePaletteItem.dispatch(createPaletteItem(pressedPaletteItem));
  }
}


