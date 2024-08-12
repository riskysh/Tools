import { Button } from "@/components/ui/button";

// src/app/todo/components/TodoItem.js
function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
        {todo.text}
        <Button variant="toolsBtn" onClick={() => deleteTodo(todo.id)}>Delete</Button>
      </li>
    );
  }
  
  export default TodoItem;
  