import { useLayoutEffect } from 'react';
import LogoTailwind from '../../assets/logo-tailwind.png';

export function Hello() {

	useLayoutEffect(() => {
		// "solução" temporária
		document.body.classList.remove('bg-alura');

		document.body.classList.add('bg-alura');
	}, []);

	return (
		<main className="bg-white opacity-50 flex flex-col md:flex-row justify-center items-center shadow-2xl p-12 w-4/5">
			<img className="w-2/5 lg:w-1/5" src={LogoTailwind} alt="Logo do Tailwind" />

			<h1 className="text-4xl lg:text-6xl font-black text-center">Olá, Tailwind CSS!</h1>

			<img className="w-2/5 lg:w-1/5" src={LogoTailwind} alt="Logo do Tailwind" />
		</main>
	);
}
