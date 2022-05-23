import styled from 'styled-components';

export const Container = styled.div`
	cursor: pointer;
	background-color: #fff;
	border-radius: 5px;
	width: 380px;
	height: 250px;
	display: flex;
	margin: 20px 0;

	&:hover {
		width: 385px;
		height: 255px;
		transition: 0.3s;

		.details {
			display: none;
		}

		.actionArea {
			display: block;
		}
	}
`;

export const Image = styled.img`
	width: 150px;
	height: 100%;
	border-radius: 5px;
	object-fit: cover;
`;

export const ImageContainer = styled.div`
	width: 150px;
	height: 100%;
`;

export const ActionArea = styled.div`
	display: none;
	height: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	padding: 30px;
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	text-align: center;
	width: 100%;
	padding: 50px 15px;

	span {
		display: flex;
		justify-content: center;

		svg {
			margin-right: 5px;
		}
	}
`;

export const Category = styled.p`
	margin-bottom: 10px;
	color: #999;
	font-weight: bold;
`;

export const Title = styled.h1`
	margin-bottom: 10px;
	font-size: 24px;
	font-weight: normal;
`;

export const Creator = styled.p`
	margin-bottom: 10px;
`;

export const Favorites = styled.p`
	margin-left: 10px;
`;

export const IconsContainer = styled.div`
	display: flex;
	justify-content: space-between;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex-direction: column;
		margin: 30px 0;
		color: #999;
		font-size: 16px;
	}
`;

export const CTA = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-weight: bold;
	font-size: 18px;
	background-color: #ff6a28;
	height: 40px;
	border-radius: 20px;
`;

export const FavoriteCounter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
`;
