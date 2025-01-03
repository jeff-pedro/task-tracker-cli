import { writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';

const taskFile = 'tasks.json';
const taskFilePath = new URL(taskFile, import.meta.url).pathname;

export async function createTaskFile() {
  try {
    if (!existsSync(taskFilePath)) {
      await writeFile(taskFilePath, '[]');
    }
  } catch (error) {
    console.error(`Error creating file ${taskFile}`, error);
  }
}

export async function loadFile() {
  try {
    await createTaskFile();
    return JSON.parse(await readFile(taskFilePath));
  } catch (error) {
    console.error(`Error loading file ${taskFile}`, error);
  }
}

export async function generateId(taskList){
  let maxId = 0;
  for (const task of taskList) {
    maxId = Math.max(maxId, task.id);
  }
  return maxId + 1;
}

export async function save(tasks) {
  try {
    await writeFile(taskFilePath, JSON.stringify(tasks));
  } catch (error) {
    console.error(error);
  }
}