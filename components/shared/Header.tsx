"use client";
/**
 * @Class Header
 * @Description Renders the header component
 * @Author Nawod Madhuwantha
 */
import React from "react";
import { HelpCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Input } from "../ui/input";

const Header = () => {
	return (
		<header className="border-b bg-card fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">DemoApp</h1>
					<div className="flex items-center gap-4">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Search..."
								className="pl-10"
							/>
						</div>
						<Button
							variant="ghost"
							size="sm"
						>
							<HelpCircle className="h-4 w-4" />
						</Button>
						<Button
							variant="ghost"
							size="sm"
						>
							<Bell className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
