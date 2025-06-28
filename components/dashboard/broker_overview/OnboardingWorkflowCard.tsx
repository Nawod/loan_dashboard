/**
 * @Class OnboardingWorkflow
 * @Description Renders the onboarding workflow component
 * @Author Nawod Madhuwantha
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OnboardingWorkflow } from "@/types";
import { CheckCircle, Circle } from "lucide-react";
import React from "react";

export function OnboardingWorkflowCard({
	steps,
}: {
	steps: OnboardingWorkflow[];
}) {
	return (
		<Card data-testid="onboarding-workflow">
			<CardHeader>
				<CardTitle className="text-lg">Onboarding Workflow</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-3">
					{steps.map((step, index) => (
						<div
							key={index}
							data-testid="workflow-step"
							className="flex items-center gap-3"
						>
							<div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-medium">
								{index + 1}
							</div>
							<span className="text-sm">{step.steps}</span>
							{step.completed ? (
								<CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
							) : (
								<Circle className="h-4 w-4 text-muted-foreground ml-auto" />
							)}
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
