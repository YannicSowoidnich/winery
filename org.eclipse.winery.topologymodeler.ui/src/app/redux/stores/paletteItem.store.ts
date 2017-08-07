import {Store, StoreEnhancer, createStore, compose} from 'redux';
import {InjectionToken} from '@angular/core';
import {PaletteItemState, default as reducer} from '../reducers/paletteItem.reducer';

const devtools: StoreEnhancer<PaletteItemState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

export function createAppStore(): Store<PaletteItemState> {
  return createStore<PaletteItemState>(
    reducer,
    compose(devtools)
  );
}

export const PaletteItemStore = new InjectionToken('PaletteItem.store');

export const paletteItemStoreProviders = [
  { provide: PaletteItemStore, useFactory: createAppStore }
];
