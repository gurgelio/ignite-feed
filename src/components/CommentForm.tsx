import {
	type ChangeEventHandler,
	type FormEventHandler,
	useState,
} from "react";

interface CommentFormProps {
	addComment: (newComment: string) => void;
}

export function CommentForm({ addComment }: CommentFormProps) {
	const [newCommentText, setNewCommentText] = useState("");
	const isNewCommentEmpty = newCommentText.length === 0;

	const onChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		event.target.setCustomValidity("");
		setNewCommentText(event.target.value);
	};

	const onInvalid: FormEventHandler<HTMLTextAreaElement> = (event) => {
		(event.target as HTMLTextAreaElement).setCustomValidity(
			"Este campo é obrigatório!",
		);
	};

	const createComment: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		if (newCommentText.length === 0) {
			return;
		}
		addComment(newCommentText);

		setNewCommentText("");
	};

	return (
		<form
			onSubmit={createComment}
			className="w-full mt-6 pt-6 border-t border-gray-600"
		>
			<strong className="leading-relaxed text-gray-100 font-bold">
				Deixe seu feedback
			</strong>
			<textarea
				value={newCommentText}
				onChange={onChange}
				className="relative w-full bg-gray-900 resize-none h-24 p-4 rounded-lg text-gray-100 leading-normal mt-4 focus:outline-emerald-500 z-50 invalid:outline-red-500"
				placeholder="Deixe um comentário"
				required={true}
				onInvalid={onInvalid}
			/>
			<button
				disabled={isNewCommentEmpty}
				className="py-2.5 px-6 mt-4 rounded-lg text-white font-bold cursor-pointer transition-colors bg-emerald-500 hover:bg-emerald-400 disabled:text-gray-300 disabled:bg-neutral-500 disabled:hover:bg-neutral-600 disabled:cursor-not-allowed"
				type="submit"
			>
				Comentar
			</button>
		</form>
	);
}
