// src/store/action.ts
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { City, Offers, Reviews, WideOffer, UserData } from '../types/types';
import { APIRoute, AuthorizationStatus } from '../const';
import { AppDispatch, RootState } from './index';

// Действия для изменения состояния
export const setCity = createAction<City>('setCity');
export const setOffers = createAction<Offers>('setOffers');
export const setOffer = createAction<WideOffer>('setOffer');
export const setReviews = createAction<Reviews>('setReviews');
export const setNearbyOffers = createAction<Offers>('setNearbyOffers');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');
export const setUserData = createAction<UserData>('setUserData');
export const clearUserData = createAction('clearUserData');

export const setFavorites = createAction<Offers>('setFavorites');
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

export const fetchFavorites = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('fetchFavorites', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Favorite);
  dispatch(setFavorites(data));
});


export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('checkAuth', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  if (data) {
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(fetchFavorites());
  } else {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});
export const login = createAsyncThunk<
  void,
  { email: string; password: string },
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
  if (data) {
    localStorage.setItem('token', data.token);
    api.defaults.headers.common['X-Token'] = data.token;
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(fetchFavorites());
  }
});
export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('logout', async (_arg, { dispatch, extra: api }) => api.delete(APIRoute.Logout)
  .then(() => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['X-Token'];
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(clearUserData());
  }));

