/**
 * @Class ContactButtons
 * @Description Renders the dynamic contact buttons component
 * @Author Nawod Madhuwantha
 */
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";

interface ContactButtonsProps {
	phone: string;
	email: string;
	chat: string;
}

export function ContactButtons({ phone, email, chat }: ContactButtonsProps) {
	return (
		<div
			className="flex gap-2"
			data-testid="broker-contact-buttons"
		>
			<Button
				variant="outline"
				size="sm"
				className="flex-1"
				onClick={() => window.open(`tel:${phone}`, "_blank")}
			>
				<Phone className="h-4 w-4 mr-2" />
				Call
			</Button>
			<Button
				variant="outline"
				size="sm"
				className="flex-1"
				onClick={() => window.open(`mailto:${email}`, "_blank")}
			>
				<Mail className="h-4 w-4 mr-2" />
				Email
			</Button>
			<Button
				variant="outline"
				size="sm"
				className="flex-1"
				onClick={() => window.open(`https://wa.me/${chat}`, "_blank")}
			>
				<MessageCircle className="h-4 w-4 mr-2" />
				Chat
			</Button>
		</div>
	);
}
