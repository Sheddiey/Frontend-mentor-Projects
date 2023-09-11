import { useState } from "react";
import AddToDo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat Tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  }

  function handleChangeTodo(nextToDo) {
    // const nextTodos = todos.find(t => t.id === nextToDo.id)
    setTodos(
      todos.map((t) => {
        if (t.id === nextToDo.id) {
          return nextToDo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteToDo(toDoId) {
    setTodos(todos.filter((t) => t.id !== toDoId));
  }
  return (
    <>
      <AddToDo onAddToDo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeToDo={handleChangeTodo}
        onDeleteToDo={handleDeleteToDo}
      />
    </>
  );
}
