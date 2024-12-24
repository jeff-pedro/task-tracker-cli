export default function validateArgs(option, value) {
    const options = ['add', 'remove', 'list'];

    if (!options.includes(option)) {
      console.log('Invalid option. Valid options: add, update, list and remove');
    }
  }