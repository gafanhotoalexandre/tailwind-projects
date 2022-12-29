import { useLayoutEffect } from "react";
import { SocialLinks } from "./SocialLinks";

export function About() {

	useLayoutEffect(() => {
		// "solução" temporária
		document.body.classList.remove('bg-alura');

		document.body.classList.add('bg-about');
	}, [])

	return (
		<div className="p-10 mx-auto flex flex-col justify-center bg-gradient-to-r from-blue-400 to-slate-400 w-4/5 md:w-2/5 shadow-md rounded gap-4">
			<p className="text-2xl md:text-4xl lg:text-6xl font-black text-primary">Alexandre</p>
			<p className="text-xl md:text-2xl lg:text-4xl">Desenvolvedor Front-end</p>

			<SocialLinks />
		</div>
	);
}
