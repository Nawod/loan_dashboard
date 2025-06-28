/**
 * @Class BorrowerCard
 * @Description Renders the borrower card component
 * @Author Nawod Madhuwantha
 */
import React from "react";
import { Borrower } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, getStatusVariant } from "@/lib/constants/shared";

interface BorrowerCardProps {
	borrower: Borrower;
	activeBorrowerId: string | null;
	setActiveBorrower: (borrower: Borrower) => void;
}

export function BorrowerCard({
	borrower,
	activeBorrowerId,
	setActiveBorrower,
}: BorrowerCardProps) {
	return (
		<div
			key={borrower.id}
			data-testid="borrower-card"
			className={`p-3 rounded-lg border cursor-pointer transition-colors ${
				activeBorrowerId === borrower.id
					? "border-primary bg-primary/5"
					: "border-border hover:border-primary/50 hover:bg-muted/50"
			}`}
			onClick={() => setActiveBorrower(borrower)}
		>
			<div className="flex justify-between items-start mb-2">
				<div
					data-testid="borrower-name"
					className="font-medium text-sm"
				>
					{borrower.name}
				</div>
				<Badge
					data-testid="borrower-status"
					variant={getStatusVariant(borrower.status) as any}
				>
					{borrower.status}
				</Badge>
			</div>
			<div className="text-xs text-muted-foreground mb-1">
				{borrower.loan_type}
			</div>
			<div
				data-testid="borrower-amount"
				className="text-sm font-semibold text-right"
			>
				{formatCurrency(borrower.amount)}
			</div>
		</div>
	);
}
