import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface SearchHistoryState {
  searches: string[];
}

const initialState: SearchHistoryState = {searches: []};

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    pushNewQuery(state, action: PayloadAction<string>) {
      state.searches = [...new Set([action.payload, ...state.searches])];
    },
    clearQueries(state) {
      state.searches = [];
    },
  },
});

export const {pushNewQuery, clearQueries} = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
