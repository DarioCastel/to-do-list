import { useEffect, useReducer } from "react";
import {todoReducer} from "../../../todoReducer";

export const useTodo = () => {
  const initialState = [];
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const nroTareas = todos.length;

  const nroPendientes = todos.filter((el) => !el.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handlerNewTodo = (todo) => {
    const action = {
      type: "addTodo",
      payload: todo,
    };
    dispatch(action);
  };
  const handlerUpdateTodo = (id, decription) => {
    const action = {
      type: "updateTodo",
      payload: { id, description },
    };
    dispatch(action);
  };
  const handlerDeleteTodo = (id) => {
    const action = {
      type: "deleteTodo",
      payload: id,
    };
    dispatch(action);
  };
  const handlerCompleteTodo = (id) => {
    const action = {
      type: "completeTodo",
      payload: id,
    };
    dispatch(action);
  };
  return {
    handlerNewTodo,
    handlerUpdateTodo,
    handlerDeleteTodo,
    handlerCompleteTodo,
    todos,
    nroTareas,
    nroPendientes,
  };
};
