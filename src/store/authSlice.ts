import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface AuthState {
  userData: FirebaseAuthTypes.User | null;
  loading: boolean;
}

const initialState: AuthState = {userData: null, loading: false};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    storeUser(state, action: PayloadAction<FirebaseAuthTypes.User>) {
      state.userData = action.payload;
    },
    logOffUser(state) {
      state.userData = null;
    },
  },
});

export const {startLoading, stopLoading, storeUser, logOffUser} =
  authSlice.actions;
export default authSlice.reducer;
