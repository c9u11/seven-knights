import { create } from 'zustand';
import { calculateFarmingEfficiency, getSummaryRows } from "@/utils/farming";

export const useFarmingStore = create((set, get) => ({
  stage: [1],
  count: [1],
  hasPackage: false,
  table: [],
  summary: [],
  setStage: (stage) => set({ stage }),
  setCount: (count) => set({ count }),
  setHasPackage: (hasPackage) => set({ hasPackage }),
  setTable: (table) => set({ table }),
  setSummary: (summary) => set({ summary }),
  calculate: () => {
    const { stage, count, hasPackage } = get();
    const result = calculateFarmingEfficiency(stage, count, hasPackage);
    set({ table: result, summary: getSummaryRows(result) });
  },
}))