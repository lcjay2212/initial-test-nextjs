import create from "zustand";

export interface PaginationProps {
  page: number;
  perPage: number;
  total: number;
  setPage: (e: number) => void;
  setPerPage: (e: number) => void;
  setTotal: (e: number) => void;
  resetValues: () => void;
}

const useStore = create((set) => ({
  page: 1,
  perPage: 50,
  total: 0,
  setPage: (e: number) => set({ page: e }),
  setPerPage: (e: number) => set({ perPage: e }),
  setTotal: (e: number) => set({ total: e }),
  resetValues: () =>
    set({
      page: 1,
      perPage: 50,
      total: 0,
    }),
}));

export default useStore;
