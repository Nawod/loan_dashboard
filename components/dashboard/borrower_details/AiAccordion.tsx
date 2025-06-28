"use client";
/**
 * @Class AiAccordion
 * @Description Renders the AI explainability accordion
 * @Author Nawod Madhuwantha
 */
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import React from "react";

export function AiAccordion({ aiFlags }: { aiFlags: string[] }) {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full"
		>
			<AccordionItem value="ai-explainability">
				<AccordionTrigger
					data-testid="ai-explainability"
					className="text-left flex items-center justify-start gap-2"
				>
					<span className="flex-1">AI Explainability</span>
					{aiFlags.length > 0 && (
						<Badge variant="destructive">{aiFlags.length} Issues</Badge>
					)}
				</AccordionTrigger>
				<AccordionContent>
					{aiFlags.length > 0 ? (
						<div
							data-testid="ai-flags"
							className="space-y-2"
						>
							{aiFlags.map((flag, index) => (
								<div
									key={index}
									className="flex items-center gap-2 p-2 bg-red-50 rounded-md"
								>
									<AlertTriangle className="h-4 w-4 text-red-600" />
									<span className="text-sm text-red-800">{flag}</span>
								</div>
							))}
						</div>
					) : (
						<div className="text-sm text-muted-foreground">
							No AI flags detected
						</div>
					)}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
