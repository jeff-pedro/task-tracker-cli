import {
  validateTaskDescription,
  validateTaskId,
  validateTaskStatus,
} from '../validations/validateTask.js';
import { loadFile, generateId, save } from './taskRepository.js';  

// Function to create new task
export async function addTask(description) {
  try {
    validateTaskDescription(description);

    const tasks = await loadFile();
    const newTask = {
      id: await generateId(tasks),
      description,
      status: 'todo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);

    await save(tasks);
    console.log(`Task added successfully (ID: ${tasks[tasks.length - 1].id})`);
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

// Function to remove one task
export async function removeTask(id) {
  try {
    validateTaskId(id);

    const tasks = await loadFile();
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex === -1) {
      throw new Error(`Task with ID ${id} not found.`).message;
    }

    tasks.splice(taskIndex, 1);
    await save(tasks);
    console.log(`Task removed successfully (ID: ${id})`);
  } catch (error) {
    console.error('Error removing task:', error);
  }
}

// Function to update one task
export async function updateTask(id, description) {
  try {
    validateTaskId(id);
    validateTaskDescription(description);

    const tasks = await loadFile();
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex === -1) {
      throw new Error(`Task with ID ${id} not found.`).message;
    }

    tasks[taskIndex].description = description;
    tasks[taskIndex].updatedAt = new Date().toISOString();

    await save(tasks);
    console.log(`Task updated successfully (ID: ${id})`);
  } catch (error) {
    console.error('Error updating task:', error);
  }
}

// Function to update the status of one task
export async function updateStatusTask(option, id) {
  const validStatusOptions = {
    'mark-todo': 'todo',
    'mark-in-progress': 'in-progress',
    'mark-done': 'done',
  };
  const status = validStatusOptions[option];
  
  try {
    validateTaskStatus(status);
    validateTaskId(id);

    const tasks = await loadFile();
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex === -1) {
      throw new Error(`Task with ID ${id} not found.`).message;
    }

    tasks[taskIndex].status = status;
    tasks[taskIndex].updatedAt = new Date().toISOString();

    await save(tasks);
    console.log(`Task with ID ${id} marked as ${status}.`);
  } catch (error) {
    console.error('Error updating task:', error);
  }
}
// Function show all task and by status
export async function listTasks(status) {
  try {
    const tasks = await loadFile();

    if (status) {
      validateTaskStatus(status);
    }

    const filteredTasks = status
      ? tasks.filter((task) => task.status === status)
      : tasks;

    if (filteredTasks.length > 0) {
      console.log(filteredTasks);
    } else {
      const message = status
        ? `Any task with status ${status} found.`
        : 'No tasks found.';
      console.log(message);
    }
  } catch (error) {
    console.error('Error listing task:', error);
  }
}
