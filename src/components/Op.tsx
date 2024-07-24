import type { Op as OpType } from "quill-delta";
import { cn } from "../utils/cn";

interface OpProps {
	op: OpType;
}

export function Op({ op }: OpProps) {
	const className = cn({
		"font-bold": op.attributes?.bold,
		italic: op.attributes?.italic,
		"font-bold text-emerald-500 hover:text-emerald-300 transition-colors":
			op.attributes?.link,
	});

	if (op.delete != null || op.retain != null) {
		return "";
	}

	if (op.insert === "\n") {
		return <br />;
	}

	if (typeof op.insert === "object") {
		throw new Error("Not Implemented");
	}

	if (op.attributes?.link != null) {
		return (
			<a
				href={op.attributes.link as string}
				rel={op.insert?.startsWith("#") ? "tag" : "external"}
				target={op.insert?.startsWith("#") ? "_self" : "_blank"}
				className={className}
			>
				{op.insert}
			</a>
		);
	}

	return <span className={className}>{op.insert}</span>;
}
