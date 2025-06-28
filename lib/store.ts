/**
 * @Class useDashboardStore
 * @Description State management for the dashboard
 * @Author Nawod Madhuwantha
 */
import { create } from 'zustand'
import { Borrower, BorrowerDetail, BrokerInfo, OnboardingWorkflow, PipelineData } from '@/types'
import { 
  getPipelineData, 
  getBorrowerDetail, 
  getBrokerInfo, 
  getOnboardingWorkflow 
} from './constants/mock-data'

interface DashboardState {
  // Pipeline data
  pipelineData: PipelineData | null
  loadingPipeline: boolean
  
  // Active borrower
  activeBorrowerId: string | null
  activeBorrowerDetail: BorrowerDetail | null
  loadingBorrowerDetail: boolean
  
  // Broker info
  brokerInfo: BrokerInfo | null
  loadingBrokerInfo: boolean
  
  // Onboarding workflow
  onboardingWorkflow: OnboardingWorkflow[] | null
  loadingOnboardingWorkflow: boolean

  // AI assistant
  aiAssistantEnabled: boolean
  
  // Actions
  setActiveBorrower: (borrower: Borrower) => void
  clearActiveBorrower: () => void
  loadPipelineData: () => Promise<void>
  loadBorrowerDetail: (id: string) => Promise<void>
  loadBrokerInfo: () => Promise<void>
  loadOnboardingWorkflow: () => Promise<void>
  initializeDashboard: () => Promise<void>
  setAiAssistantEnabled: (enabled: boolean) => void

}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  // Initial state
  pipelineData: null,
  loadingPipeline: false,
  activeBorrowerId: null,
  activeBorrowerDetail: null,
  loadingBorrowerDetail: false,
  brokerInfo: null,
  loadingBrokerInfo: false,
  onboardingWorkflow: null,
  loadingOnboardingWorkflow: false,
  aiAssistantEnabled: true,

  //set active borrower
  setActiveBorrower: (borrower: Borrower) => {
    set({ activeBorrowerId: borrower.id })
    get().loadBorrowerDetail(borrower.id)
  },

  //clear active borrower
  clearActiveBorrower: () => {
    set({ 
      activeBorrowerId: null, 
      activeBorrowerDetail: null 
    })
  },

  //load pipeline data
  loadPipelineData: async () => {
    set({ loadingPipeline: true })
    try {
      const data = await getPipelineData()
      set({ pipelineData: data })
    } catch (error) {
      console.error('Failed to load pipeline data:', error)
    } finally {
      set({ loadingPipeline: false })
    }
  },

  //load borrower detail
  loadBorrowerDetail: async (id: string) => {
    set({ loadingBorrowerDetail: true })
    try {
      const detail = await getBorrowerDetail(id)
      set({ activeBorrowerDetail: detail })
    } catch (error) {
      console.error('Failed to load borrower detail:', error)
    } finally {
      set({ loadingBorrowerDetail: false })
    }
  },

  //load broker info
  loadBrokerInfo: async () => {
    set({ loadingBrokerInfo: true })
    try {
      const info = await getBrokerInfo()
      set({ brokerInfo: info })
    } catch (error) {
      console.error('Failed to load broker info:', error)
    } finally {
      set({ loadingBrokerInfo: false })
    }
  },

  //load onboarding workflow
  loadOnboardingWorkflow: async () => {
    set({ loadingOnboardingWorkflow: true })
    try {
      const workflow = await getOnboardingWorkflow()
      set({ onboardingWorkflow: workflow })
    } catch (error) {
      console.error('Failed to load onboarding workflow:', error)
    } finally {
      set({ loadingOnboardingWorkflow: false })
    }
  },

  //initialize dashboard
  initializeDashboard: async () => {
    await Promise.all([
      get().loadPipelineData(),
      get().loadBrokerInfo(),
      get().loadOnboardingWorkflow()
    ])
  },

  //set ai assistant enabled
  setAiAssistantEnabled: (enabled: boolean) => {
    set({ aiAssistantEnabled: enabled })
  }
})) 