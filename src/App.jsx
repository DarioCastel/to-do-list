import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {handlerNewTodo,
    handlerUpdateTodo,
    handlerDeleteTodo,
    handlerCompleteTodo,
    todos,
    nroTareas,
    nroPendientes,}=useTodo();

  return (
    <div className="card-to-do">
      <h1>LISTA DE TAREAS</h1>
      <div className="counter-todos">
        <h3>Nro de Tareas: <span>{nroTareas}</span></h3>
        <h3>Nro de Pendientes: <span>{nroPendientes}</span> </h3>
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
