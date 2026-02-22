import { Task } from "../models/tasks.js";

export const getTotalTasks = (tasks: Task[]): number => tasks.length;

export const getCompletedTasks = (tasks: Task[]): number =>
    tasks.filter(task => task.completed).length;

export const getPendingTasks = (tasks: Task[]): number =>
    tasks.filter(task => !task.completed).length;
