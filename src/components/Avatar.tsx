import type { ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	outline?: boolean;
}

export function Avatar({
	outline = false,
	className,
	alt = "",
	...props
}: AvatarProps) {
	return (
		<img
			className={cn(
				"w-14 aspect-square rounded-lg",
				outline &&
					"box-content border-4 border-transparent outline outline-2 outline-emerald-500",
				className,
			)}
			{...props}
			alt={alt}
		/>
	);
}
