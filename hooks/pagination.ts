import create from "zustand";

const useStore = create((set) => ({
  page: 1,
  perPage: 10,
  setPage: (e: number) => set({ page: e }),
  setPerPage: (e: number) => set({ perPage: e }),
}));

export default useStore;
