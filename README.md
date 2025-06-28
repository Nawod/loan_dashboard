# Loan Dashboard

A modern, responsive loan management dashboard built with Next.js, TypeScript, Tailwind CSS, and Zustand for state management.

## Features

- **3-Column Responsive Layout**: Desktop grid layout that stacks on mobile
- **Borrower Pipeline**: Tabs for New, In Review, and Approved borrowers
- **Borrower Details**: Comprehensive borrower information with AI explainability
- **Broker Overview**: Broker statistics and contact information
- **Onboarding Workflow**: Step-by-step workflow tracking
- **State Management**: Zustand for efficient state management
- **Testing**: Cypress E2E tests for comprehensive coverage

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI components
- **State Management**: Zustand
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Testing**: Cypress
- **Development**: ESLint, PostCSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Running Tests

```bash
# Run Cypress tests
npm run cypress:open

# Run Cypress tests headlessly
npm run cypress:run
```

## Project Structure

```
loan_dashboard/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── BorrowerPipeline.tsx
│   ├── BorrowerDetail.tsx
│   ├── BrokerOverview.tsx
│   └── Dashboard.tsx
├── lib/                  # Utilities and services
│   ├── utils.ts          # Utility functions
│   ├── store.ts          # Zustand store
│   └── mock-data.ts      # Mock API data
├── types/                # TypeScript type definitions
│   └── index.ts
├── cypress/              # E2E tests
│   └── e2e/
└── public/               # Static assets
```

## Key Components

### Dashboard Layout

- **Header**: App title, search, help, and notification icons
- **3-Column Grid**: Responsive layout with borrower pipeline, details, and broker info
- **Mobile Responsive**: Stacks vertically on smaller screens

### Borrower Pipeline (Left Panel)

- **Tabs**: New, In Review, Approved
- **Borrower Cards**: Name, loan type, amount, status
- **Radio Section**: F-SANATISED ACTIVE options
- **Interactive**: Click to select active borrower

### Borrower Details (Center Panel)

- **Header**: Name, contact info, loan amount, status badge
- **AI Explainability**: Expandable accordion with warning flags
- **Action Buttons**: Request Documents, Send to Valuer, Approve, Escalate
- **Loan Summary**: Employment, existing loan, credit score, source of funds
- **Risk Signals**: Warning callouts with icons
- **Contact Buttons**: Call, Email, Chat

### Broker Overview (Right Panel)

- **Broker Info**: Name and statistics (deals, approval rate, pending)
- **Contact Buttons**: Call, Email, Chat
- **Onboarding Workflow**: 7-step process with completion indicators
- **AI Assistant Toggle**: E Ardsassist feature toggle

## State Management

The application uses Zustand for state management with the following store structure:

```typescript
interface DashboardState {
	// Pipeline data
	pipelineData: PipelineData | null;
	loadingPipeline: boolean;

	// Active borrower
	activeBorrowerId: string | null;
	activeBorrowerDetail: BorrowerDetail | null;
	loadingBorrowerDetail: boolean;

	// Broker info
	brokerInfo: BrokerInfo | null;
	loadingBrokerInfo: boolean;

	// Onboarding workflow
	onboardingWorkflow: OnboardingWorkflow | null;
	loadingOnboardingWorkflow: boolean;

	// Actions
	setActiveBorrower: (borrower: Borrower) => void;
	clearActiveBorrower: () => void;
	loadPipelineData: () => Promise<void>;
	loadBorrowerDetail: (id: string) => Promise<void>;
	loadBrokerInfo: () => Promise<void>;
	loadOnboardingWorkflow: () => Promise<void>;
	initializeDashboard: () => Promise<void>;
}
```

## Testing

The application includes comprehensive Cypress E2E tests covering:

- Dashboard layout and responsiveness
- Borrower pipeline functionality
- Borrower detail interactions
- AI explainability section
- Action button functionality
- Broker information display
- Onboarding workflow
- Console logging verification

### Running Tests

```bash
# Open Cypress Test Runner
npm run cypress:open

# Run tests headlessly
npm run cypress:run
```

## API Integration

The application currently uses mock data but is structured to easily integrate with real APIs. The mock data structure matches the provided API specification:

- `/api/borrowers/pipeline` - Get borrower pipeline data
- `/api/borrowers/{id}` - Get borrower details
- `/api/broker/{id}` - Get broker information
- `/api/onboarding/workflow` - Get onboarding workflow

## Responsive Design

- **Desktop**: 3-column grid layout
- **Tablet**: 2-column layout
- **Mobile**: Single column, stacked layout
- **Breakpoints**: Tailwind CSS responsive utilities

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run cypress:open # Open Cypress Test Runner
npm run cypress:run  # Run Cypress tests headlessly
```

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## Deployment

The application can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker containers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.
