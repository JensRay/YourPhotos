import { create } from "zustand";

import avatar from "../assets/placeholder-img.jpg";

const useUserDataStore = create((set) => ({
  userData: {},
  fetchUserData: async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      set({ userData: { ...data, avatar } });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },
  followState: false,
  toggleFollowState: () =>
    set((state) => {
      console.log("Follow state changed:", !state.followState);
      return {
        followState: !state.followState,
      };
    }),
  images: [],
  fetchImages: async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      const data = await response.json();
      set({ images: data });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  },
}));

export { useUserDataStore };
