import create from "zustand";

export interface SearchProps {
  searchText?: string;
  setSearchText: (e: string) => void;
}

const useSearch = create((set) => ({
  searchText: "",
  setSearchText: (e: string) => set({ searchText: e }),
}));

export default useSearch;
