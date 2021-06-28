import create from "zustand";

const useStore = create((set) => ({
  page: 1,
  perPage: 50,
  total: 0,
  setPage: (e: number) => set({ page: e }),
  setPerPage: (e: number) => set({ perPage: e }),
  setTotal: (e: number) => set({ total: e }),
}));

export default useStore;
