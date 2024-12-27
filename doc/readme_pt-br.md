<div align="center">

# Task Tracker CLI

> Solução para o desafio [task-tracker-cli](https://github.com/jeff-pedro/task-tracker-cli) do [roadmap.sh](https://roadmap.sh/projects/task-tracker).

</div>

###### Português - [Inglês](../readme.md)

## Descrição

**Task Tracker CLI** é um aplicativo de linha de comando (CLI) visa gerenciar tarefas de forma eficiente. Com este rastreador, você poderá adicionar, atualizar, excluir e marcar tarefas como concluídas ou em progresso.

## Funcionalidades

* **Adicionar tarefas:** Adiciona novas tarefas com uma descrição concisa.
* **Atualizar tarefas:** Edita tarefas existentes para refletir mudanças.
* **Excluir tarefas:** Remove tarefas que não são mais necessárias.
* **Marcar tarefas:** Indica se uma tarefa está em progresso, concluída ou ainda a fazer.
* **Listar tarefas:** Visualiza todas as tarefas, ou filtra por status (todas, concluídas, em progresso, a fazer).

## Pré-requisitos

* Node.js v18 ou maior, npm (ou yarn) instalados.

## Instalando

Clone o repositório e execute o seguinte comando:

```bash
git clone https://github.com/jeff-pedro/task-tracker-cli.git
cd task-tracker-cli
```

Instalação global via npm (opcional)

```bash
npm install -g .
# e execute ...
task-cli
```

## Executando

Adicionar uma nova tarefa:

```bash
npm start task-cli add "Fazer compras"
```

Atualizar uma tarefa:

```bash
task-cli update 1 "Fazer compras para o jantar"
```

Excluir uma tarefa:

```bash
task-cli delete 1
```

Marcar uma tarefa como em in-progress, done ou todo:

```bash
task-cli mark-in-progress 1
task-cli mark-done 1
task-cli mark-todo 1
```

Listar todas as tarefas:

```bash
task-cli list
```

Listar tarefas por status:

```bash
task-cli list done
task-cli list todo
task-cli list in-progress
```

## Estrutura do arquivo JSON

As tarefas são armazenadas em um arquivo JSON com a seguinte estrutura:

```json
[
  {
    "id": 1,
    "description": "Fazer compras",
    "status": "done",
    "createdAt": "2023-11-22T10:35:20Z",
    "updatedAt": "2023-11-22T10:45:20Z"
  },
  // ... outras tarefas
]
```
