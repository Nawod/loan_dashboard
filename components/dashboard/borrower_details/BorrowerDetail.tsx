"use client";
/**
 * @Class BorrowerDetail
 * @Description Renders the borrower detail component
 * @Author Nawod Madhuwantha
 */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDashboardStore } from "@/lib/store";
import { formatCurrency, getStatusVariant } from "@/lib/constants/shared";
import { AiAccordion } from "./AiAccordion";
import { LoanSummary } from "./LoanSummary";
import { ContactButtons } from "@/components/shared/ContactButtons";

export function BorrowerDetail() {
	const { activeBorrowerDetail, aiAssistantEnabled } = useDashboardStore();

	if (!activeBorrowerDetail) {
		return (
			<Card
				className="h-full"
				data-testid="borrower-detail"
			>
				<CardContent className="flex items-center justify-center h-full">
					<div className="text-center text-muted-foreground">
						<p>Select a borrower to view details</p>
					</div>
				</CardContent>
			</Card>
		);
	}

	const handleRequestDocuments = async () => {
		console.log("Documents requested successfully");
	};

	const handleSendToValuer = async () => {
		console.log("Sent to valuer successfully");
	};

	const handleApprove = async () => {
		console.log("Loan approved successfully");
	};

	return (
		<Card
			className="h-full"
			data-testid="borrower-detail"
		>
			<CardHeader>
				<div className="flex justify-between items-start">
					<div>
						<CardTitle className="text-xl">
							{activeBorrowerDetail.name}
						</CardTitle>
						<div className="text-sm text-muted-foreground mt-1">
							{activeBorrowerDetail.email} •{" "}
							<span className="block md:inline">
								{activeBorrowerDetail.phone}
							</span>
						</div>
						<div className="text-lg font-semibold mt-2">
							{formatCurrency(activeBorrowerDetail.loan_amount)}
						</div>
					</div>
					<Badge
						variant={getStatusVariant(activeBorrowerDetail.status) as any}
						className="text-nowrap"
					>
						{activeBorrowerDetail.status}
					</Badge>
				</div>
			</CardHeader>

			<CardContent className="space-y-6">
				{/* AI Explainability Section */}
				{aiAssistantEnabled && (
					<AiAccordion aiFlags={activeBorrowerDetail.ai_flags} />
				)}

				{/* Action Buttons */}
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						<Button
							variant="outline"
							onClick={handleRequestDocuments}
							data-testid="request-documents-button"
						>
							Request Documents
						</Button>
						<Button
							variant="outline"
							onClick={handleSendToValuer}
							data-testid="send-to-valuer-button"
						>
							Send to Valuer
						</Button>
					</div>
					<Button
						variant="default"
						onClick={handleApprove}
						className="w-full mt-2 bg-green-600 hover:bg-green-700"
						data-testid="approve-button"
					>
						Approve
					</Button>
				</div>

				{/* Loan Summary */}
				<LoanSummary activeBorrowerDetail={activeBorrowerDetail} />

				{/* Contact Buttons */}
				<ContactButtons
					phone={activeBorrowerDetail.phone}
					email={activeBorrowerDetail.email}
					chat={activeBorrowerDetail.phone}
				/>
			</CardContent>
		</Card>
	);
}
