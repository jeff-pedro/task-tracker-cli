const validStatus = ['done', 'todo', 'in-progress'];
const validOptions = [
  'add',
  'remove',
  'list',
  'update',
  'mark-done',
  'mark-todo',
  'mark-in-progress',
];

export function validateTaskId(id) {
  if (isNaN(id) || !id) {
    throw new Error('Invalid task ID. Please provide a valid numeric ID.')
      .message;
  }
}

export function validateTaskStatus(status) {
  if (!validStatus.includes(status) && status !== undefined) {
    throw new Error(
      `Invalid task status '${status}'. Provide a valid option: ${validStatus.join(
        ', '
      )}.`
    ).message;
  }
}

export function validateTaskDescription(description) {
  if (!description) {
    throw new Error('Missing task description. Please provide one.').message;
  }
}

export function validateTaskOption(option) {
  if (!validOptions.includes(option)) {
    console.error(`Invalid option. Valid options: ${validOptions.join(', ')}`);
  }
}
