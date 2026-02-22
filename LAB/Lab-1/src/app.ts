import { Task } from "./models/tasks.js";
import { getTotalTasks, getCompletedTasks, getPendingTasks } from "./utils/taskCalculator.js";
import { formatSummary } from "./utils/dataFormatter.js";

const tasks: Task[] = [
    { id: 1, title: "Requirements", completed: true },
    { id: 2, title: "Analysis",     completed: true },
    { id: 3, title: "Design",       completed: true },
    { id: 4, title: "Development",  completed: false },
    { id: 5, title: "Testing",      completed: false }
];

const total     = getTotalTasks(tasks);
const pending   = getPendingTasks(tasks);
const completed = getCompletedTasks(tasks);

console.log(formatSummary(total, pending, completed));
