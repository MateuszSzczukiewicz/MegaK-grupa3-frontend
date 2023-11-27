import { ReactNode } from 'react';
import { SingleDetailWrapper } from './SingleDetail.styles';

export const SingleDetail = ({ children }: { children: ReactNode }) => {
	return <SingleDetailWrapper>{children}</SingleDetailWrapper>;
};
