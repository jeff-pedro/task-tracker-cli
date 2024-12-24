# Task Tracker

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

## Instalação

1. Clone este repositório:

    ```bash
   git clone [https://seu-repositorio.git](https://seu-repositorio.git)
   ```

2. Instale as dependências:

   ```bash
   cd task-tracker-cli
   npm install
   ```

3. Execute o script

    ```bash
    npm start
    ```

## Instação via npm

```bash
npm install -g task-tracker-cli
```

## Uso

```bash
# Adicionar uma nova tarefa
task-cli add "Fazer compras"
# Saída: Tarefa adicionada com sucesso (ID: 1)

# Atualizar uma tarefa
task-cli update 1 "Fazer compras para o jantar"

# Excluir uma tarefa
task-cli delete 1

# Marcar uma tarefa como em progresso
task-cli mark-in-progress 1
task-cli mark-done 1

# Listar todas as tarefas
task-cli list

# Listar tarefas por status
task-cli list done
task-cli list todo
task-cli list in-progress
```

### Exemplo de uso

[exemplo de como o script pode ser usado em um cenário real.]

## Estrutura do arquivo JSON

As tarefas são armazenadas em um arquivo JSON com a seguinte estrutura:

```json
[
  {
    "id": 1,
    "description": "Comprar mantimentos",
    "status": "done",
    "createdAt": "2023-11-22T10:35:20Z",
    "updatedAt": "2023-11-22T10:45:20Z"
  },
  // ... outras tarefas
]
```

## Proximos passos

* [melhorias futuras]
