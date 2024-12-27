<div align="center">

# Task Tracker CLI

> Solution for the [task-tracker-cli](https://github.com/jeff-pedro/task-tracker-cli) challenge from [roadmap.sh](https://roadmap.sh/projects/task-tracker).

</div>


###### English - [Portuguese](./doc/readme_pt-br.md)


## Description

**Task Tracker** CLI is a command-line interface (CLI) application designed to efficiently manage your tasks. With this tracker, you can add, update, delete, and mark tasks as completed or in progress.

## Features

* **Add** tasks: Add new tasks with a concise description.
* **Update** tasks: Edit existing tasks to reflect changes.
* **Delete** tasks: Remove tasks that are no longer needed.
* **Mark** tasks: Indicate whether a task is in progress, completed, or to-do.
* **List** tasks: View all tasks, or filter by status (all, completed, in progress, to-do).

## Prerequisites

* Node.js v18 or higher, npm (or yarn) installed.

## Installation

Clone the repository and run the following command:

```bash
git clone https://github.com/jeff-pedro/task-tracker-cli.git
cd task-tracker-cli
```

Global Installation via npm (optional)

```bash
npm install -g .
# and run ...
task-cli
```

## Usage

Add new tasks:

```bash
npm start task-cli add "Buy groceries"
```

Update tasks:

```bash
task-cli update 1 "Wash clothes"
```

Delete tasks:

```bash
task-cli delete 1
```

Mark tasks as in-progress, done and, todo:

```bash
task-cli mark-in-progress 1
task-cli mark-done 1
task-cli mark-todo 1
```

List all tasks:

```bash
task-cli list
```

List task by status:

```bash
task-cli list done
task-cli list todo
task-cli list in-progress
```

## JSON File Structure

Tasks are stored in a JSON file with the following structure:

```json
[
  {
    "id": 1,
    "description": "Buy groceries",
    "status": "done",
    "createdAt": "2023-11-22T10:35:20Z",
    "updatedAt": "2023-11-22T10:45:20Z"
  },
]
```
