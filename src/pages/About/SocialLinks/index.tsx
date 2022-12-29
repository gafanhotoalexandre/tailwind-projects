import { SocialLink } from "./SocialLink";

export function SocialLinks() {
	return (
		<ul className="flex gap-3">
			<SocialLink
				href=""
				name="Linkedin"
			/>
			<SocialLink
				href="mailto:alexandrevmartinsdelima@gmail.com"
				name="E-mail"
			/>
			<SocialLink
				href="https://github.com/gafanhotoalexandre"
				name="Github"
			/>
		</ul>
	);
}
