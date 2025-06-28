import { Borrower, BorrowerDetail, BrokerInfo, OnboardingWorkflow, PipelineData } from '@/types'

export const mockPipelineData: PipelineData = {
  new: [
    {
      id: "1",
      name: "Sarah Dunn",
      loan_type: "Home Loan",
      amount: 300000,
      status: "Renew"
    },
    {
      id: "3",
      name: "Lisa Carter",
      loan_type: "Home Loan",
      amount: 450000,
      status: "New"
    }
  ],
  in_review: [
    {
      id: "2",
      name: "Alan Matthews",
      loan_type: "Personal Loan",
      amount: 20000,
      status: "In Review"
    }
  ],
  approved: []
}

export const mockBorrowerDetails: Record<string, BorrowerDetail> = {
  "1": {
    id: "1",
    name: "Sarah Dunn",
    email: "sarah.dunn@example.com",
    phone: "(355)123-4557",
    loan_amount: 300000,
    status: "In Review",
    employment: "At Tech Company",
    income: 120000,
    existing_loan: 240000,
    credit_score: 720,
    source_of_funds: "Declared",
    risk_signal: "Missing Source of Funds declaration",
    ai_flags: [
      "Income Inconsistent with Bank statements",
      "High Debt-to-Income Ratio detected"
    ]
  },
  "2": {
    id: "2",
    name: "Alan Matthews",
    email: "alan.matthews@example.com",
    phone: "(355)123-4558",
    loan_amount: 20000,
    status: "In Review",
    employment: "Self Employed",
    income: 80000,
    existing_loan: 15000,
    credit_score: 680,
    source_of_funds: "Declared",
    risk_signal: "High credit utilization",
    ai_flags: [
      "Inconsistent income documentation",
      "Multiple credit inquiries"
    ]
  },
  "3": {
    id: "3",
    name: "Lisa Carter",
    email: "lisa.carter@example.com",
    phone: "(355)123-4559",
    loan_amount: 450000,
    status: "New",
    employment: "Corporate Executive",
    income: 180000,
    existing_loan: 0,
    credit_score: 780,
    source_of_funds: "Declared",
    risk_signal: undefined,
    ai_flags: []
  }
}

export const mockBrokerInfo: BrokerInfo = {
  name: "Robert Turner",
  deals: 16,
  approval_rate: "75%",
  pending: 7660,
  phone: "(355)123-4557",
  email: "robert.turner@example.com"
}

export const mockOnboardingWorkflow: OnboardingWorkflow[] = [
  {
    steps: "Deal Intake",
    completed: true
  },
  {
    steps: "Document Upload",
    completed: true
  },
  {
    steps: "AI Validation",
    completed: true
  },
  {
    steps: "Credit Committee",
    completed: false
  },
  {
    steps: "Approval & Docs",
    completed: false
  },
  {
    steps: "Funder Syndication",
    completed: false
  },
  {
    steps: "Loan Disbursement",
    completed: false
  }
]

// Mock API functions
export const getPipelineData = (): Promise<PipelineData> => {
  return Promise.resolve(mockPipelineData)
}

export const getBorrowerDetail = (id: string): Promise<BorrowerDetail | null> => {
  return Promise.resolve(mockBorrowerDetails[id] || null)
}

export const getBrokerInfo = (): Promise<BrokerInfo> => {
  return Promise.resolve(mockBrokerInfo)
}

export const getOnboardingWorkflow = (): Promise<OnboardingWorkflow[]> => {
  return Promise.resolve(mockOnboardingWorkflow)
}

export const escalateToCreditCommittee = (id: string): Promise<{ success: boolean; message: string }> => {
  return Promise.resolve({ success: true, message: "Escalated to Credit Committee." })
} 