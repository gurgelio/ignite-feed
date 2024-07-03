import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
	return (
		<div className="mt-6 flex gap-4 items-start">
			<Avatar className="w-12" src="https://github.com/gurgelio.png" />

			<div className="flex-1">
				<div className="bg-gray-700 p-4 rounded-lg">
					<header className="flex items-start justify-between">
						<div className="flex flex-col">
							<strong className="font-bold text-sm/relaxed">Devon Lane</strong>
							<time
								className="text-xs/relaxed text-gray-400"
								title="3 de julho às 14:16"
								dateTime="2024-07-03 14:06:00"
							>
								Cerca de 1h atrás
							</time>
						</div>
						<button
							type="button"
							className="text-gray-400 cursor-pointer leading-[0] rounded-sm hover:text-rose-500 text-"
							title="Excluir comentário"
						>
							<Trash size={20} />
						</button>
					</header>
					<p className="text-gray-300 mt-4">Muito bom Devon, parabéns!! 👏👏</p>
				</div>
				<footer className="mt-4">
					<button
						type="button"
						className="text-gray-400 cursor-pointer flex items-center transition-colors rounded-sm hover:text-emerald-300"
					>
						<ThumbsUp className="mr-2" />
						Aplaudir{" "}
						<span className="before:px-2 before:content-['•']">20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
