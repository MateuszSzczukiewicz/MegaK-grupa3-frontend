import styled from 'styled-components';

export const GradeStarsSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 10px 0 0;

	p {
		font-size: ${({ theme }) => theme.font.size.lg};
		padding-right: 12px;
		color: ${({ theme }) => theme.color.grey4};
	}

	span {
		color: ${({ theme }) => theme.color.white};
	}

	svg {
		height: 20px;
		width: 20px;
		stroke: ${({ theme }) => theme.color.grey1};
	}
`;

export const Star = styled.div<{ $red?: boolean }>`
	svg {
		fill: ${({ theme, $red }) => ($red ? theme.color.red1 : theme.color.grey1)};
		stroke: ${({ theme, $red }) => ($red ? theme.color.red1 : theme.color.grey1)};
	}
`;
