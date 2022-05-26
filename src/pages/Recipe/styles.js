import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	border-radius: 5px;
	padding: 30px;
	margin: 30px 0;

	ul {
		font-size: 18px;
	}
`;

export const Title = styled.h1`
	text-align: center;
	color: #ff6a28;
	margin-bottom: 20px;
`;

export const Image = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 5px;
	object-fit: cover;
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const Timestamp = styled.p`
	color: #999;
`;

export const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Detail = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 5px;
	background-color: #f5f5f5;
	width: 130px;
	height: 130px;
	color: #ff6a28;
	font-weight: bold;
	margin: 15px;
	margin-bottom: 30px;

	button {
		border: none;
		padding: 0;
		margin: 0;
		color: #ff6a28;
	}

	svg {
		margin-bottom: 10px;
	}

	p:last-child {
		margin-top: 5px;
		color: #999;
	}
`;
