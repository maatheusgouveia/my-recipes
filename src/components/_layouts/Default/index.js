import Header from '../../Header';

import { Container, Content } from './styles';

export default function DefaultLayout({ children }) {
	return (
		<Container>
			<Header />
			<Content>{children}</Content>
		</Container>
	);
}
