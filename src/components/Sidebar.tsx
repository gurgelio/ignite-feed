import { PencilSimple } from "phosphor-react";

export function Sidebar() {
	return (
		<aside className="bg-gray-800 rounded-lg overflow-hidden">
			<img
				className="w-full h-20 object-cover"
				src="https://images.unsplash.com/photo-1719329411191-be2cda36a37c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>

			<div className="flex flex-col items-center">
				<img
					className="box-content w-14 aspect-square rounded-lg border-gray-800 border-4 -mt-8 outline outline-2 outline-emerald-500"
					src="https://github.com/gurgelio.png"
					alt=""
				/>
				<strong className="mt-4 text-gray-100 leading-6">
					Leonardo Gurgel
				</strong>
				<span className="text-sm text-gray-400 leading-6">
					Full-Stack Developer
				</span>
			</div>

			<footer className="border-t-gray-600 border-t mt-6 pt-6 p-8">
				<a
					className="bg-transparent text-emerald-500 border border-emerald-500 rounded-lg h-12 font-bold px-4 flex items-center justify-center gap-2 whitespace-nowrap hover:bg-emerald-500 hover:text-white transition-colors"
					href="#aside"
				>
					<PencilSimple size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
