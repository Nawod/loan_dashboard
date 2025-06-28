export interface Borrower {
  id: string
  name: string
  loan_type: string
  amount: number
  status: 'New' | 'In Review' | 'Approved' | 'Renew'
}

export interface BorrowerDetail {
  id: string
  name: string
  email: string
  phone: string
  loan_amount: number
  status: string
  employment: string
  income: number
  existing_loan: number
  credit_score: number
  source_of_funds: string
  risk_signal: string
  ai_flags: string[]
}

export interface BrokerInfo {
  name: string
  deals: number
  approval_rate: string
  pending: number
  phone: string
  email: string
}

export interface OnboardingWorkflow {
  steps: string;
  completed: boolean
}

export interface PipelineData {
  new: Borrower[]
  in_review: Borrower[]
  approved: Borrower[]
}

export type TabValue = 'new' | 'in_review' | 'approved' 