import { Habit, User } from '@/types/global'
import { create } from 'zustand'

type Store = {
    user: User
    habits: Habit[]
    setUser: (user: User) => void
    setHabits: (habits: Habit[]) => void
    addNewHabit: (habit: Habit) => void
}

export const useStore = create<Store>()((set) => ({
    user: {} as User,
    habits: [],
    setUser: (user: User) => set({ user: user}),
    setHabits: (habits: Habit[]) => set({ habits: habits}),
    addNewHabit: (habit: Habit) => set((state) => ({ habits: { habit, ...state.habits }})),
}))