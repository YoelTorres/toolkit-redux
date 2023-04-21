import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis";

export const TodoApp = () => {

  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1 ) return;
    setTodoId(todoId - 1);
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>isLoading: {isLoading ? 'True' : 'False'} </h4>

      <pre>{ JSON.stringify(todo) }</pre>
      
      <button onClick={ prevTodo }>
        Previus Todo
      </button>
      <button onClick={() => setTodoId(todoId+1)}>
        Next Todo
      </button>


    </>
  )
}
