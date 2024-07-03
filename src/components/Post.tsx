import { Link } from "./Link";

export function Post() {
	return (
		<article className="bg-gray-800 rounded-lg p-10">
			<header className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<img
						src="https://github.com/gurgelio.png"
						className="box-content w-14 aspect-square rounded-lg border-gray-800 border-4 outline outline-2 outline-emerald-500"
					/>
					<div className="flex flex-col">
						<strong className="font-bold text-gray-100 leading-6">
							Leonardo Gurgel
						</strong>
						<span className="text-sm text-gray-400 leading-6">
							Full-Stack Developer
						</span>
					</div>
				</div>

				<time
					className="text-sm text-gray-400"
					title="3 de julho às 14:16"
					dateTime="2024-07-03 14:06:00"
				>
					Publicado há 1h
				</time>
			</header>

			<p className="leading-6 text-gray-300 mt-6">
				Fala galeraa 👋<br />
				<br /> Acabei de subir mais um projeto no meu portifa. É um projeto que
				fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
				🚀<br />
				<br /> 👉{" "}
				<Link href="https://tetris.gurgel.io/" rel="external">
					tetris.gurgel.io
				</Link>
				<br />
				<br />
				<Link rel="tag" href="#novoprojeto">
					#novoprojeto
				</Link>{" "}
				<Link rel="tag" href="#nlw">
					#react
				</Link>{" "}
				<Link rel="tag" href="#rocketseat">
					#tetris
				</Link>
			</p>

			<form className="w-full mt-6 pt-6 border-t border-gray-600">
				<strong className="leading-6 text-gray-100 font-bold">
					Deixe seu feedback
				</strong>
				<textarea
					className="w-full bg-gray-900 resize-none h-24 p-4 rounded-lg text-gray-100 leading-5 mt-4 focus:outline-emerald-500"
					placeholder="Deixe um comentário"
				/>
				<button
					className="py-4 px-6 mt-4 rounded-lg bg-emerald-500 text-white font-bold cursor-pointer hover:bg-emerald-400 transition-colors"
					type="submit"
				>
					Publicar
				</button>
			</form>
		</article>
	);
}
