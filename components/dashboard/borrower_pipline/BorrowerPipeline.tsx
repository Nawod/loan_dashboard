"use client";
/**
 * @Class BorrowerPipeline
 * @Description Renders the borrower pipeline component
 * @Author Nawod Madhuwantha
 */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Borrower, PipelineData, TabValue } from "@/types";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { useDashboardStore } from "@/lib/store";
import { Status } from "@/lib/constants/shared";
import { BorrowerCard } from "./BorrowerCard";

export function BorrowerPipeline() {
	const [activeTab, setActiveTab] = React.useState<TabValue>("new");
	const { pipelineData, activeBorrowerId, setActiveBorrower } =
		useDashboardStore();

	const renderBorrowerList = (borrowers: Borrower[]) => {
		if (borrowers.length === 0) {
			return (
				<div className="text-center py-8 text-muted-foreground">
					No borrowers in this category
				</div>
			);
		}

		return (
			<div className="space-y-2">
				{borrowers.map((borrower) => (
					<BorrowerCard
						key={borrower.id}
						borrower={borrower}
						activeBorrowerId={activeBorrowerId}
						setActiveBorrower={setActiveBorrower}
					/>
				))}
			</div>
		);
	};

	return (
		<Card
			className="h-full"
			data-testid="borrower-pipeline"
		>
			<CardHeader>
				<CardTitle className="text-lg">Borrower Pipeline</CardTitle>
			</CardHeader>
			<CardContent>
				<Tabs
					value={activeTab}
					onValueChange={(value) => setActiveTab(value as TabValue)}
				>
					<TabsList className="grid w-full grid-cols-3">
						{Status.TabValues.map((status) => (
							<TabsTrigger
								key={status.id}
								value={status.id}
							>
								{status.label}
							</TabsTrigger>
						))}
					</TabsList>

					{Status.TabValues.map((status) => (
						<TabsContent
							key={status.id}
							value={status.id}
							className="mt-4"
						>
							{renderBorrowerList(
								pipelineData?.[status.id as keyof PipelineData] || []
							)}
						</TabsContent>
					))}
				</Tabs>

				<div className="mt-6 pt-4 border-t">
					<div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
						F-SANATISED ACTIVE
					</div>
					<RadioGroup
						defaultValue="option1"
						className="space-y-2"
					>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="option1"
								id="option1"
							/>
							<Label
								htmlFor="option1"
								className="text-sm"
							>
								Option 1
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="option2"
								id="option2"
							/>
							<Label
								htmlFor="option2"
								className="text-sm"
							>
								Option 2
							</Label>
						</div>
					</RadioGroup>
				</div>
			</CardContent>
		</Card>
	);
}
