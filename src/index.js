import validateArgs from './validations/validateArgs.js';
import { addTask, removeTask, listTasks } from './tasks/taskService.js'

const [, , option, value ] = process.argv;

async function main() {  
  switch (option) {
    case 'add': 
    await addTask(value);
    break;
    case 'remove': 
    await removeTask(value);
    break;
    case 'list': 
    await listTasks(value);
    break;
    default:
      console.log('Invalid option.');
    }  
  }
  
validateArgs(option, value);
main();
