import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../types/user.type';

const initialState: UserType = {
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType['user'] | null>) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = null;
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
