import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card-to-do">
      <h1>LISTA DE TAREAS</h1>
      <div className="counter-todos">
        <h3>Nro de Tareas: <span>01</span></h3>
        <h3>Nro de Pendientes: <span>01</span> </h3>
      </div>
      <div className="add-todo">
          <h3>AGREGAR TAREA</h3>
          <AddTodo/>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
