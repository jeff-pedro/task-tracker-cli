const validStatus = ['done', 'todo', 'in-progress'];

export function validateStatus(status) {    
    if (!validStatus.includes(status) && status !== undefined) {
        throw new Error(`error: unknow option '${status}'\n(Valid options: ${validStatus.join(', ')})`).message;
    } 
}

