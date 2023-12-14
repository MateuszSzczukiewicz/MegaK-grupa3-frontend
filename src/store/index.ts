import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/user-slice';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
