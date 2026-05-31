import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:5002/api/news";

export const useNewsStore = create((set) => ({
    news: [],
    loading: false,

    // GET all news
    fetchNews: async () => {
        set({ loading: true });

        try {
            const res = await axios.get(API_URL);
            set({ news: res.data });
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch news");
        } finally {
            set({ loading: false });
        }
    },

    // CREATE news (FIXED POSITION)
    createNews: async (newsData) => {
        try {
            const res = await axios.post(API_URL, newsData);

            set((state) => ({
                news: [res.data, ...state.news]
            }));

            toast.success("News created successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to create news");
        }
    },
}));