"use client";
/**
 * @Class LoanSummary
 * @Description Renders the loan summary component
 * @Author Nawod Madhuwantha
 */
import { Button } from "@/components/ui/button";
import { escalateToCreditCommittee } from "@/lib/constants/mock-data";
import { formatCurrency } from "@/lib/constants/shared";
import { BorrowerDetail } from "@/types";
import { AlertTriangle } from "lucide-react";
import React from "react";

export function LoanSummary({
	activeBorrowerDetail,
}: {
	activeBorrowerDetail: BorrowerDetail;
}) {
	// Escalate to credit committee
	const handleEscalate = async () => {
		try {
			await escalateToCreditCommittee(activeBorrowerDetail.id);
			console.log("Escalated to credit committee successfully");
		} catch (error) {
			console.error("Failed to escalate:", error);
		}
	};
	return (
		<div className="space-y-6">
			<div className="space-y-4">
				<h3 className="font-semibold">Loan Summary</h3>
				<div className="grid grid-cols-2 gap-4 text-sm">
					<div>
						<div className="text-muted-foreground">Employment</div>
						<div className="font-medium">{activeBorrowerDetail.employment}</div>
					</div>
					<div>
						<div className="text-muted-foreground">Existing Loan</div>
						<div className="font-medium">
							{formatCurrency(activeBorrowerDetail.existing_loan)}
						</div>
					</div>
					<div>
						<div className="text-muted-foreground">Credit Score</div>
						<div className="font-medium">
							{activeBorrowerDetail.credit_score}
						</div>
					</div>
					<div>
						<div className="text-muted-foreground">Source of Funds</div>
						<div className="font-medium">
							{activeBorrowerDetail.source_of_funds}
						</div>
					</div>
				</div>
			</div>
			{/* Risk Signal */}
			{activeBorrowerDetail.risk_signal && (
				<>
					<div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
						<div className="flex items-center gap-2">
							<AlertTriangle className="h-4 w-4 text-yellow-600" />
							<span className="text-sm text-yellow-800">
								{activeBorrowerDetail.risk_signal}
							</span>
						</div>
					</div>

					<Button
						className="w-full"
						onClick={handleEscalate}
						disabled={activeBorrowerDetail.status === "Approved"}
						data-testid="escalate-button"
					>
						Escalate to Credit Committee
					</Button>
				</>
			)}
		</div>
	);
}
