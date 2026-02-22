export const getTotalTasks = (tasks) => tasks.length;
export const getCompletedTasks = (tasks) => tasks.filter(task => task.completed).length;
export const getPendingTasks = (tasks) => tasks.filter(task => !task.completed).length;
//# sourceMappingURL=taskCalculator.js.map