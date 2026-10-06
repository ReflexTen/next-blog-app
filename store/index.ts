import { getAllPosts, getPostsBySearch } from "@/services/getPosts";
import { create } from "zustand";

interface IUsePosts {
  posts: any[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (searchValue: string) => Promise<void>;
}

export const usePosts = create<IUsePosts>((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    const res = await getAllPosts();
    set({ posts: res, loading: false });
  },
  getPostsBySearch: async (searchValue: string) => {
    set({ loading: true });
    const res = await getPostsBySearch(searchValue);
    set({ posts: res, loading: false });
  },
}));

