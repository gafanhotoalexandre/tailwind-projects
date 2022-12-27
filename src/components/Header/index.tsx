import { MenuLink } from "./MenuLink";

export function Header() {
	return (
		<header className="mb-4">
			<nav>
				<ul className="flex flex-wrap gap-6 sm:gap-8 text-white text-lg sm:text-xl">
					<MenuLink
						link={'/'}
						name={'Início'}
					/>

					<MenuLink
						link={'/about'}
						name={'Sobre'}
					/>

					<MenuLink
						link={'/subscribe'}
						name={'Inscreva-se'}
					/>
				</ul>
			</nav>
		</header>
	);
}
