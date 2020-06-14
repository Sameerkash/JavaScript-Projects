import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const Todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodos = new Todo(Math.random().toString(), text);

  Todos.push(newTodos);

  res.status(201).json({ message: "createTodo", createTodo: newTodos });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: Todos });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = Todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("could not find todo!");
  }

  Todos[todoIndex] = new Todo(Todos[todoIndex].id, updatedText);

  res.json({ message: "updated", updateTodo: Todos[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoid = req.params.id;

  const todoIndex = Todos.findIndex((todo) => todo.id === todoid);

  if (todoIndex < 0) {
    throw new Error("could not find todo!");
  }
  Todos.splice(todoIndex, 1);
  res.status(200).json({ message: "successfully deleted" });
};
