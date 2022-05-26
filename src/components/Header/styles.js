import styled from 'styled-components';

export const Container = styled.div`
	background-color: #ff6a28;
	height: 80px;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	width: 80%;
	display: flex;
`;

export const LogoContainer = styled.div`
	width: 80%;
	color: #fff;

	span {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	h1 {
		margin-left: 10px;
	}
`;

export const ActionsContainer = styled.div`
	width: 80%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: #fff;

	button {
		display: flex;
		flex-direction: row;
		align-items: center;
		background: none;
		border: 0;
		color: #fff;
		font-size: 18px;
		margin: 0 20px;
		text-transform: uppercase;
	}

	svg {
		font-size: 24px;
		margin-left: 10px;
		margin-right: 10px;
	}
`;
