import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../palette.service';
@Component({
  selector: 'app-palette-component',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css'],
  providers: [PaletteService],
})
export class PaletteComponent implements OnInit {
  isHidden = true;
  paletteItems = [];

  constructor(private paletteService: PaletteService) {
    this.paletteItems = paletteService.getPaletteData();
  }

  ngOnInit() {
  }

  public openPalette(): void {
    this.isHidden = false;

  }

}


