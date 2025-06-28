"use client";
/**
 * @Class Dashboard
 * @Description Renders the dashboard layout with main content
 * @Author Nawod Madhuwantha
 */
import React, { useEffect } from "react";
import { BorrowerPipeline } from "./borrower_pipline/BorrowerPipeline";
import { BorrowerDetail } from "./borrower_details/BorrowerDetail";
import { BrokerOverview } from "./broker_overview/BrokerOverview";
import { useDashboardStore } from "@/lib/store";

export function Dashboard() {
	const { initializeDashboard } = useDashboardStore();

	useEffect(() => {
		initializeDashboard();
	}, [initializeDashboard]);

	return (
		<main className="container mx-auto px-4 py-6 bg-background">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Left Panel - Borrower Pipeline */}
				<div className="lg:col-span-1">
					<BorrowerPipeline />
				</div>

				{/* Center Panel - Borrower Details */}
				<div className="lg:col-span-1">
					<BorrowerDetail />
				</div>

				{/* Right Panel - Broker Overview */}
				<div className="lg:col-span-1">
					<BrokerOverview />
				</div>
			</div>
		</main>
	);
}
