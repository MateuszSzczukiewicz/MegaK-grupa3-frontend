import styled from 'styled-components';

export const GradeStarsSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	margin: 10px 0 20px;
	p {
		font-size: ${({ theme }) => theme.font.size.lg};
		padding-right: 12px;
		color: ${({ theme }) => theme.color.grey4};
	}
	span {
		color: ${({ theme }) => theme.color.white};
	}
	svg {
		fill: ${({ theme }) => theme.color.grey1};
		height: 20px;
		width: 20px;
	}
`;
