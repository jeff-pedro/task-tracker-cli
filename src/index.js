import validateArgs from './validations/validateArgs.js';
import { addTask } from './tasks/taskService.js'

const [, , option, value ] = process.argv;

async function main() {  
  switch (option) {
    case 'add': 
    await addTask(value);
    break;
    default:
      console.log('Invalid option.');
    }  
  }
  
validateArgs(option, value);
main();