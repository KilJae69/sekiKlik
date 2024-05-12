import { GeneralSlice } from '@/stores/types';
import { createGeneralSlice } from '@/stores/general';
import { create } from 'zustand';

export const useBoundStore = create<GeneralSlice>()((...a) => ({
  ...createGeneralSlice(...a),
}));
