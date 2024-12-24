import validateArgs from './validations/validateArgs.js';
import { addTask, removeTask, listTasks, updateTask } from './tasks/taskService.js'

const [, , option, arg1, arg2 ] = process.argv;

async function main() {  
  switch (option) {
    case 'add': 
    await addTask(arg1);
    break;
    case 'remove': 
    await removeTask(arg1);
    break;
    case 'update': 
    await updateTask(arg1, arg2);
    break
    case 'list': 
    await listTasks(arg1);
    break;
    default:
      console.log('Invalid option.');
    }  
  }
  
validateArgs(option, arg1);
main();
