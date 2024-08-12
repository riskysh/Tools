"use client"
import { useState } from 'react';
import TodoForm from './todo-form';
import TodoList from './todo-list';
import NavBar from '@/components/header';
import Footer from '@/components/footer';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
        <NavBar />
      <h1 className='text-white text-6xl text-left ml-14 mt-40 font-extrabold'>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
}
