const validStatus = ['done', 'todo', 'in-progress'];

export function validateStatus(status) {
    if (!validStatus.includes(status) && status !== undefined) {
        console.error(`Invalid status: ${status}. Valid status: ${validStatus}`);
        process.exit(1);
    }
}

