export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string; // Optional profile picture
};

export type Habit = {
  id: string;
  title: string;
  description?: string;
  createdBy: string; // User ID
  partnerId: string; // Partner’s User ID
  frequency: "daily" | "weekly" | "monthly";
  progress: number; // 0 to 100%
  createdAt: Date;
};

export type Plan = {
  id: string;
  title: string;
  description?: string;
  createdBy: string;
  partnerId: string;
  goalAmount: number;
  savedAmount: number;
  deadline: Date;
};

export type Event = {
  id: string;
  title: string;
  date: Date;
  alertBeforeDays: number[]; // Days before to send reminders (e.g., [7, 1])
};

export type Task = {
  id: string;
  title: string;
  assignedTo: string; // User ID
  status: "pending" | "completed";
  dueDate?: Date;
};
