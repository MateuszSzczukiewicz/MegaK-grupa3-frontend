import styled from 'styled-components';

export const StyledTextArea = styled.div`
	background-color: ${({ theme }) => theme.color.grey10};
	margin-bottom: 12px;
	padding: 17px 26px 19px;
	width: 100%;
	font-size: ${({ theme }) => theme.font.size.xs};

	${({ theme }) => theme.mq.sm} {
		font-size: ${({ theme }) => theme.font.size.md};
	}
`;
