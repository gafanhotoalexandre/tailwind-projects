interface SocialLinkProps {
	href: string;
	name: string;
}

export function SocialLink({ href, name }: SocialLinkProps) {
	return (
		<li>
			<a
				href={href}
				className="hover:font-bold hover:text-primary duration-150 delay-200"
				target="_blank"
			>
				{name}
			</a>
		</li>
	);
}
