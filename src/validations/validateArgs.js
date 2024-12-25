const validOptions = [
  'add', 'remove', 'list', 'update', 'mark-done', 'mark-todo', 'mark-in-progress'
];

export default function validateArgs(option) {
    if (!validOptions.includes(option)) {
      console.log(`Invalid option. Valid options: ${validOptions}`);
    }
  }