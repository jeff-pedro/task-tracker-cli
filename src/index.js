import { addTask, removeTask, listTasks, updateTask, updateStatusTask } from './tasks/taskService.js'
import validateOptions from './validations/validateOptions.js';

const [, , option, arg1, arg2] = process.argv;

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
    break;
    case 'list': 
    await listTasks(arg1);
    break;
    case 'mark-todo': 
    await updateStatusTask(option, arg1);
    break;
    case 'mark-done': 
    await updateStatusTask(option, arg1);
    break;
    case 'mark-in-progress': 
    await updateStatusTask(option, arg1);
    break;
    default:
      validateOptions(option);
    }  
  }
  
main();
