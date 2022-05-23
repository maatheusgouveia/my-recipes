import styled from 'styled-components';

export const Button = styled.button`
	background: transparent;
	border: none;

	color: ${({ active }) => (active ? 'red' : '#999')};
`;
