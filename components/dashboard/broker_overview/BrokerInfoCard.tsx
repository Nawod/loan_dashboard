/**
 * @Class BrokerInfo
 * @Description Renders the broker info component
 * @Author Nawod Madhuwantha
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/constants/shared";
import React from "react";
import { BrokerInfo } from "@/types";
import { ContactButtons } from "@/components/shared/ContactButtons";

export function BrokerInfoCard({ brokerInfo }: { brokerInfo: BrokerInfo }) {
	return (
		<Card data-testid="broker-info">
			<CardHeader>
				<CardTitle
					className="text-lg"
					data-testid="broker-name"
				>
					{brokerInfo.name}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{/* Stats Grid */}
				<div
					className="grid grid-cols-3 gap-4"
					data-testid="broker-stats"
				>
					<div className="text-center">
						<div className="text-2xl font-bold text-primary">
							{brokerInfo.deals}
						</div>
						<div className="text-xs text-muted-foreground">Deals</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold text-green-600">
							{brokerInfo.approval_rate}
						</div>
						<div className="text-xs text-muted-foreground">Approval Rate</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold text-orange-600">
							{formatCurrency(brokerInfo.pending)}
						</div>
						<div className="text-xs text-muted-foreground">Pending</div>
					</div>
				</div>

				{/* Contact Buttons */}
				<ContactButtons
					phone={brokerInfo.phone}
					email={brokerInfo.email}
					chat={brokerInfo.phone}
				/>
			</CardContent>
		</Card>
	);
}
