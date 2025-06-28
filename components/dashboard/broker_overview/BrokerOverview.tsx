"use client";
/**
 * @Class BrokerOverview
 * @Description Renders the broker overview component
 * @Author Nawod Madhuwantha
 */
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useDashboardStore } from "@/lib/store";
import { BrokerInfoCard } from "./BrokerInfoCard";
import { OnboardingWorkflowCard } from "./OnboardingWorkflowCard";

export function BrokerOverview() {
	const {
		brokerInfo,
		onboardingWorkflow,
		loadingBrokerInfo,
		loadingOnboardingWorkflow,
		aiAssistantEnabled,
		setAiAssistantEnabled,
	} = useDashboardStore();

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
						<div className="space-y-1">
							<span className="text-sm font-medium">E Ardsassist</span>
							<p className="text-xs text-muted-foreground">
								Enable AI-powered assistance for loan processing
							</p>
						</div>
						<Switch
							checked={aiAssistantEnabled}
							onCheckedChange={setAiAssistantEnabled}
							className="data-[state=checked]:bg-green-600"
							aria-label="Toggle AI Assistant"
						/>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
