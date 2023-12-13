import styled from 'styled-components';

export const StyledGoBackElement = styled.div`
	display: flex;
	align-items: start;
	justify-content: start;
	cursor: pointer;

	svg {
		fill: ${({ theme }) => theme.color.grey3};
		height: 20px;
		width: 20px;
	}

	p {
		padding-left: 5px;
		height: 27px;
		font-size: ${({ theme }) => theme.font.size.md};
		font-weight: ${({ theme }) => theme.font.weight.bold};
	}
`;
