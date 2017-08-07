import {compose, createStore, Store, StoreEnhancer} from 'redux';
import {InjectionToken} from '@angular/core';
import {PaletteOpenedState, default as reducer} from '../reducers/paletteState.reducer';

const devtools: StoreEnhancer<PaletteOpenedState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

export function createAppStore(): Store<PaletteOpenedState> {
  return createStore<PaletteOpenedState>(
    reducer,
    compose(devtools)
  );
}

export const PaletteOpenedStore = new InjectionToken('PaletteOpened.store');

export const paletteStateStoreProviders = [
  { provide: PaletteOpenedStore, useFactory: createAppStore }
];
