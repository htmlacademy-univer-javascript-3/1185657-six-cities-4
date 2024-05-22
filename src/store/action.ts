// src/store/action.ts
import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/types';

// Действия для изменения состояния
export const setCity = createAction<City>('setCity');
export const setOffers = createAction<Offers>('setOffers');
