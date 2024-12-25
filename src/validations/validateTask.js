const validStatus = ['done', 'todo', 'in-progress'];

export function validateTaskId(id) {
    if (isNaN(id) || !id) {
        throw new Error('Invalid task ID. Please provide a valid numeric ID.').message;
    }
}


export function validateTaskStatus(status) {    
    if (!validStatus.includes(status) && status !== undefined) {
        throw new Error(`Invalid task status '${status}'. Provide a valid option: ${validStatus.join(', ')}.`).message;
    } 
}
