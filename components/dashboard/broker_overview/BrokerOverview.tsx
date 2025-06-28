"use client";
/**
 * @Class BrokerOverview
 * @Description Renders the broker overview component
 * @Author Nawod Madhuwantha
 */
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Switch } from "@/components/ui/switch";
import { useDashboardStore } from "@/lib/store";
import { BrokerInfoCard } from "./BrokerInfoCard";
import { OnboardingWorkflowCard } from "./OnboardingWorkflowCard";

export function BrokerOverview() {
	const {
		brokerInfo,
		onboardingWorkflow,
		loadingBrokerInfo,
		loadingOnboardingWorkflow,
	} = useDashboardStore();

	const [aiAssistantEnabled, setAiAssistantEnabled] = useState(false);

	if (loadingBrokerInfo || loadingOnboardingWorkflow) {
		return (
			<Card className="h-full">
				<CardContent className="flex items-center justify-center h-full">
					<div className="text-center text-muted-foreground">
						<p>Loading broker information...</p>
					</div>
				</CardContent>
			</Card>
		);
	}

	if (!brokerInfo || !onboardingWorkflow) {
		return (
			<Card className="h-full">
				<CardContent className="flex items-center justify-center h-full">
					<div className="text-center text-muted-foreground">
						<p>No broker information available</p>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<div className="space-y-6">
			{/* Broker Info Card */}
			<BrokerInfoCard brokerInfo={brokerInfo} />

			{/* Onboarding Workflow Card */}
			<OnboardingWorkflowCard steps={onboardingWorkflow} />

			{/* AI Assistant Toggle */}
			<Card>
				<CardHeader>
					<CardTitle className="text-lg">AI Assistant</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex items-center justify-between">
						<span className="text-sm">E Ardsassist</span>
						{/* <Switch
							checked={aiAssistantEnabled}
							onCheckedChange={setAiAssistantEnabled}
						/> */}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
