const validOptions = [
  'add', 'remove', 'list', 'update', 'mark-done', 'mark-todo', 'mark-in-progress'
];

export default function validateOptions(option) {
    if (!validOptions.includes(option)) {
      console.log(`Invalid option. Valid options: ${validOptions}`);
    }
  }