import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "../utils/cn";

interface TimeProps {
	date: Date;
	className?: string;
}

export function Time({ date, className }: TimeProps) {
	const formattedDate = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	});
	const relativeFormattedDate = formatDistanceToNow(date, {
		locale: ptBR,
		addSuffix: true,
	});

	return (
		<time
			className={cn("text-sm text-gray-400", className)}
			title={formattedDate}
			dateTime={date.toISOString()}
		>
			{relativeFormattedDate}
		</time>
	);
}
