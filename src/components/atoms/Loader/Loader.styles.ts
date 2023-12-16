import styled from 'styled-components';

export const StyledLoader = styled.p`
	width: 40px;
	height: 40px;
	border: 5px solid #fff;
	border-bottom-color: transparent;
	border-radius: 50%;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
	max-width: 800px;
	margin: 70px auto;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;
