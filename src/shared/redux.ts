import {
  ThunkAction,
  UnknownAction,
  asyncThunkCreator,
  buildCreateSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { extraArgument, store } from "../app/store";

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<
  R,
  AppState,
  typeof extraArgument,
  UnknownAction
>;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
}>();

export type extraArgument = typeof extraArgument;

export const createSliceApp = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator}
})