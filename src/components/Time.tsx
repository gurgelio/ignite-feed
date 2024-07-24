import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useMemo } from "react";
import { cn } from "../utils/cn";

interface TimeProps {
	date: Date;
	className?: string;
}

export function Time({ date, className }: TimeProps) {
	const [formattedDate, relativeFormattedDate] = useMemo(() => {
		return [
			format(date, "d 'de' LLLL 'às' HH:mm'h'", {
				locale: ptBR,
			}),
			formatDistanceToNow(date, {
				locale: ptBR,
				addSuffix: true,
			}),
		];
	}, [date]);

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
