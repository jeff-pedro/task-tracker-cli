const validStatus = ['done', 'todo', 'in-progress'];

export function validateStatus(status) {
    if (!validStatus.includes(status)) {
        console.error(`Invalid status: ${status}. Valid status: ${validStatus}`);
        return false;
    } else {
        return true;
    }
}

