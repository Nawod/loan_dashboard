export class Status {
  static New = {
    id: 'new',
    label: 'New',
    color: '#007bff',
  }
  static InReview = {
    id: 'in_review',
    label: 'In Review',
    color: '#ffc107',
  }
  static Approved = {
    id: 'approved',
    label: 'Approved',
    color: '#28a745',
  }
  static Renew = {
    id: 'renew',
    label: 'Renew',
    color: '#6f42c1',
  }

  static TabValues = [Status.New, Status.InReview, Status.Approved]
}

// Format currency
export const formatCurrency = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(amount);
};

// Get status variant
export const getStatusVariant = (status: string) => {
	switch (status) {
		case "New":
			return "info";
		case "In Review":
			return "warning";
		case "Approved":
			return "success";
		case "Renew":
			return "secondary";
		default:
			return "default";
	}
};