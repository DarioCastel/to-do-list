import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="to-do-container">
        <div className="card-head">
          <h1>TASK TO DO</h1>
          <div className="contadores-to-do">
            <h3>n° of tasks: <span>5</span></h3>
            <h3>n° pending tasks: <span>5</span></h3>
          </div>
        </div>
        <div className="card-add">
          <h2>Add task</h2>
          <AddForm/>
        </div>
        aca va la lista de tareas
      </div>
    </div>
  );
}

export default App;
