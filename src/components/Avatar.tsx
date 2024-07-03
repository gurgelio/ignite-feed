import { cn } from "../utils/cn";

interface AvatarProps {
	src: string;
	className?: string;
	outline?: boolean;
}

export function Avatar({ src, outline = false, className }: AvatarProps) {
	return (
		<img
			className={cn(
				"w-14 aspect-square rounded-lg",
				outline &&
					"box-content border-4 border-transparent outline outline-2 outline-emerald-500",
				className,
			)}
			src={src}
			alt=""
		/>
	);
}
