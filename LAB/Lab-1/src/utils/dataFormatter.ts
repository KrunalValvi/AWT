export const formatSummary = (
    total: number,
    pending: number,
    completed: number
): string => {
    return `
    Tasks Summary
    -------------------
    Total Tasks   : ${total}
    Pending Tasks : ${pending}
    Completed Tasks: ${completed}
    `;
};
