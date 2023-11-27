import styled from 'styled-components';

export const SingleDetailWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 27px;
	margin-bottom: 8px;
	margin-left: 22px;

	svg {
		height: 15px;
		fill: ${({ theme }) => theme.color.grey1};
	}
	a {
		margin-left: 10px;
		margin-right: 10px;
		word-break: break-all;
		line-height: 15px;
		color: ${({ theme }) => theme.color.white};
		text-decoration: none;
	}

	${({ theme }) => theme.mq.md} {
		align-self: self-start;
	}
`;
