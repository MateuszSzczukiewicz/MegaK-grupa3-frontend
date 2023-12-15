import { createContext } from 'react';
import { UserType } from '../types/User.type';

export const UserContext = createContext({
	user: {
		userFullName: '',
		userId: '',
		userRole: null,
	},
	setUser: (user: UserType) => {},
});
