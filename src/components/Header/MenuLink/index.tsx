interface MenuLinkProps {
	link: string;
	name: string;
}

export function MenuLink({ link, name }: MenuLinkProps) {
	return (
		<li className="hover:scale-110 transition-all">
			<a href={link}>{name}</a>
		</li>
	);
}
