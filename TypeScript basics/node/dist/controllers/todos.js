"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const Todos = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodos = new todo_1.Todo(Math.random().toString(), text);
    Todos.push(newTodos);
    res.status(201).json({ message: "createTodo", createTodo: newTodos });
};
exports.getTodos = (req, res, next) => {
    res.json({ todos: Todos });
};
exports.updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = Todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("could not find todo!");
    }
    Todos[todoIndex] = new todo_1.Todo(Todos[todoIndex].id, updatedText);
    res.json({ message: "updated", updateTodo: Todos[todoIndex] });
};
exports.deleteTodo = (req, res, next) => {
    const todoid = req.params.id;
    const todoIndex = Todos.findIndex((todo) => todo.id === todoid);
    if (todoIndex < 0) {
        throw new Error("could not find todo!");
    }
    Todos.splice(todoIndex, 1);
    res.status(200).json({ message: "successfully deleted" });
};
