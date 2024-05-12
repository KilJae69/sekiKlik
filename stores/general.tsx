import { StateCreator } from 'zustand';
import { GeneralSlice } from '@/stores/types';

export const createGeneralSlice: StateCreator<GeneralSlice> = (set) => ({
  isMainSidebarOpen: false,
  toggleIsMainSidebarOpen: () =>
    set((state) => ({ isMainSidebarOpen: !state.isMainSidebarOpen })),
  isAccountSidebarOpen: false,
  toggleIsAccountSidebarOpen: () =>
    set((state) => ({ isAccountSidebarOpen: !state.isAccountSidebarOpen })),
});
