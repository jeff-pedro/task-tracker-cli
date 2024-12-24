import { validateStatus } from '../validations/validateStatus.js';
import { loadFile, generateId, save } from './taskRepository.js';

export async function addTask(description) {
    try {
      const tasks = await loadFile();
      const newTask = {
        id: await generateId(tasks),
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updateAt:new Date().toISOString(),
      }
      tasks.push(newTask);
      await save(tasks);
      console.log(`Task added successfully (ID: ${tasks[tasks.length - 1].id})`);
    } catch (error) {
      console.error(error);
    }
  }

export async function removeTask(id) {
  try {
   const tasks = await loadFile();
   const taskIndex = tasks.findIndex(task => task.id === Number(id));
   tasks.splice(taskIndex ,1);
   await save(tasks);
   console.log(`Task removed successfully`);
  } catch (error) {
    console.error(error);
  }
}

export async function listTasks(status) {
  if (validateStatus(status)) {
    const tasks = await loadFile();
  
    const filteredTasks = status
    ? tasks.filter((task) => task.status === status)
    : tasks
  
    filteredTasks.length > 0
    ? console.log(filteredTasks)
    : console.log(`Any task with status ${status} found`);
  }
}
