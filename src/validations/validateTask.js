export function validateTaskId(id) {
    if (isNaN(id) || !id) {
        throw new Error('Invalid task ID. Please provide a valid numeric ID.').message;
    }
}