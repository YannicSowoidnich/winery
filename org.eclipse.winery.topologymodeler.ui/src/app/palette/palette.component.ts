import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PaletteService } from '../palette.service';

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
  @Output() sendPressedPaletteItem = new EventEmitter();

  constructor(private paletteService: PaletteService) {
    this.paletteItems = paletteService.getPaletteData();
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
    } else {
      this.paletteRootState = 'shrunk';
    }
  }

  publishTitle($event): void {
    const left = $event.pageX - 100;
    const top = $event.pageY - 30;
    const pressedPaletteItem: any = {
      name: $event.target.innerHTML,
      mousePositionX: left.toString().concat('px'),
      mousePositionY: top.toString().concat('px')
    };
    this.sendPressedPaletteItem.emit(pressedPaletteItem);
  }
}


