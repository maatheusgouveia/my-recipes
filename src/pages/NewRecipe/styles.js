import styled from 'styled-components';

export const Container = styled.div`
	padding: 30px;
	background-color: #fff;
	min-height: 500px;

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

export const Title = styled.h1`
	text-align: center;
	color: #ff6a28;
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	min-width: 50vw;
	max-width: 75vw;

	input,
	select,
	textarea {
		width: 100%;
	}
`;

export const SaveButton = styled.button`
	min-width: 200px;
	height: 50px;
	background-color: #ff6a28;
	color: #fff;
	font-weight: bold;
	border: none;
	font-size: 20px;
	text-transform: uppercase;
`;
