// src/store/action.ts
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { City, Offers, Reviews, WideOffer } from '../types/types';
import { APIRoute } from '../const';
import { AppDispatch, RootState } from './index';

// Действия для изменения состояния
export const setCity = createAction<City>('setCity');
export const setOffers = createAction<Offers>('setOffers');
export const setOffer = createAction<WideOffer>('setOffer');
export const setReviews = createAction<Reviews>('setReviews');
export const setNearbyOffers = createAction<Offers>('setNearbyOffers');
export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(setOffers(data));
});

export const fetchOffer = createAsyncThunk<
  void,
  string, // Тип аргумента - offerId
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('fetchOffer', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<WideOffer>(`${APIRoute.Offers}/${offerId}`);
  dispatch(setOffer(data));
});
export const fetchReviews = createAsyncThunk<
  void,
  string, // Тип аргумента - offerId
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('fetchReviews', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<Reviews>(`${APIRoute.Review}/${offerId}`);
  dispatch(setReviews(data));
});
export const fetchNearbyOffers = createAsyncThunk<
  void,
  string, // Тип аргумента - offerId
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('fetchNearbyOffers', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
  dispatch(setNearbyOffers(data));
});
