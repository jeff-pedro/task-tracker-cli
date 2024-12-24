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