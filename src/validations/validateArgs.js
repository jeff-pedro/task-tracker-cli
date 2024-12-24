export default function validateArgs(option, value) {
    if (option !== 'add') {
      console.log('Invalid option. Valid options: add, update, list and remove');
    }
  }
