import * as React from 'react';

import { SingleDetailWrapper } from './SingleDetail.styles';

interface Props {
	children: React.ReactNode;
}

export const SingleDetail = ({ children }: Props) => {
	return <SingleDetailWrapper>{children}</SingleDetailWrapper>;
};
