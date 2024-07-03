import type { PropsWithChildren } from "react";

interface LinkProps {
	href: string;
	rel?: "external" | "tag" | "author";
}

export function Link({ href, children, rel }: PropsWithChildren<LinkProps>) {
	return (
		<a
			href={href}
			className="font-bold text-emerald-500 hover:text-emerald-300 transition-colors"
			rel={rel}
			target={rel === "external" ? "_blank" : undefined}
		>
			{children}
		</a>
	);
}
