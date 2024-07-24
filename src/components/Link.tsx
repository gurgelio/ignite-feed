import type { PropsWithChildren } from "react";
import { cn } from "../utils/cn";

interface LinkProps {
	href: string;
	rel?: "external" | "tag" | "author";
	className?: string;
}

export function Link({
	href,
	children,
	rel,
	className,
}: PropsWithChildren<LinkProps>) {
	return (
		<a
			href={href}
			className={cn(
				"font-bold text-emerald-500 hover:text-emerald-300 transition-colors",
				className,
			)}
			rel={rel}
			target={rel === "external" ? "_blank" : undefined}
		>
			{children}
		</a>
	);
}
