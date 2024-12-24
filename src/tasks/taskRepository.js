import { writeFile, readFile, readdir } from 'fs/promises';
import { existsSync } from 'fs';

const taskFilePath = new URL('tasks.json', import.meta.url).pathname;

export async function createTaskFile() {
  if (!existsSync(taskFilePath)) {
    await writeFile(taskFilePath, '[]');
  }
}

export async function loadFile() {
  await createTaskFile();
  return JSON.parse(await readFile(taskFilePath));
}

export async function generateId(taskList){
  return taskList.length > 0 ? taskList.length + 1 : 1
}

export async function save(tasks) {
  try {
    await writeFile(taskFilePath, JSON.stringify(tasks));
  } catch (error) {
    console.error(error);
  }
}