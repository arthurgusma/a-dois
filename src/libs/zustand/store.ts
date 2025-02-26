import { create } from "zustand";
import { db } from "@/libs/firebaseConfig";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { Habit, Plan, Event } from "@/types/global";

type AppState = {
  habits: Habit[];
  plans: Plan[];
  events: Event[];
  fetchHabits: () => Promise<void>;
  fetchPlans: () => Promise<void>;
  fetchEvents: () => Promise<void>;
};

export const useAppStore = create<AppState>((set) => ({
  habits: [],
  plans: [],
  events: [],

  fetchHabits: async (): Promise<void> => {
    try {
      const querySnapshot = await getDocs(collection(db, "habits"));
      const habits: Habit[] = querySnapshot.docs.map((doc: DocumentData) => ({
        ...(doc.data() as Habit),
        id: doc.id,
      }));
      set((state) => (JSON.stringify(state.habits) !== JSON.stringify(habits) ? { ...state, habits } : state));
    } catch (error) {
      console.error("Failed to fetch habits:", error);
    }
  },

  fetchPlans: async (): Promise<void> => {
    try {
      const querySnapshot = await getDocs(collection(db, "plans"));
      const plans: Plan[] = querySnapshot.docs.map((doc: DocumentData) => ({
        ...(doc.data() as Plan),
        id: doc.id,
      }));
      set((state) => (JSON.stringify(state.plans) !== JSON.stringify(plans) ? { ...state, plans } : state));
    } catch (error) {
      console.error("Failed to fetch plans:", error);
    }
  },

  fetchEvents: async (): Promise<void> => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      const events: Event[] = querySnapshot.docs.map((doc: DocumentData) => ({
        ...(doc.data() as Event),
        id: doc.id,
      }));
      set((state) => (JSON.stringify(state.events) !== JSON.stringify(events) ? { ...state, events } : state));
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  },
}));
