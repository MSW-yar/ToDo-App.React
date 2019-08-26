import React from "react";

const Todos = ({ todos, deleteTodo, todostatus, completetodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <p> {todo.content} </p>
          <p> Status : {todostatus}</p>
          <button
            id="delete"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {" "}
            Delete{" "}
          </button>
          <button id="edit"> Edit &#9998; </button>
          <button id="complete" onClick = {()=>{completetodo('Completed')}}> Complete &#10003; </button>
        </div>
      );
    })
  ) : (
    <p> You got no todo's left, enjoy </p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
