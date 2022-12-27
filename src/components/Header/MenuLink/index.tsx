import { Link } from 'react-router-dom'

interface MenuLinkProps {
	link: string;
	name: string;
}

export function MenuLink({ link, name }: MenuLinkProps) {
	return (
		<li className="hover:scale-110 transition-all">
			<Link to={link}>{name}</Link>
		</li>
	);
}
