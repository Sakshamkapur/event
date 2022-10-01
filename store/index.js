import create from "zustand";

export const useStore = create((set) => ({
  events: {},
  setEvents: (id, value) => {
    set((state) => ({ ...state, events: { ...state.events, [id]: value } }));
  },
}));
