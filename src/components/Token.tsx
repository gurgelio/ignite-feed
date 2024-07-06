import type { Token as TokenType } from "../model/token";
import { Link } from "./Link";

interface TokenProps {
	token: TokenType;
}

export function Token({ token }: TokenProps) {
	switch (token.type) {
		case "text":
			return <span>{token.content}</span>;
		case "tag":
			return <Link href={token.content}>{token.content}</Link>;
		case "link":
			return <Link href={token.href}>{token.content}</Link>;
	}
}
