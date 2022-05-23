import { GiHearts } from 'react-icons/gi';

import { Button } from './styles';

export default function FavoriteButton(props) {
	return (
		<Button {...props}>
			<GiHearts size={props.iconSize ? props.iconSize : 24} />
		</Button>
	);
}
