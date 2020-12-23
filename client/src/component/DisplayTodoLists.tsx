import React, { useState } from 'react'
import UpdateTodoContainer from './UpdateTodoContainer'


type DisplayTodoListsProps = {
  todos: ITodo[],
  handleDoneTodo: (_id: string) => void
}

const DisplayTodoLists: React.FC<DisplayTodoListsProps> = (props) => {

  const [updateTodo, setupdateTodo] = useState(props.todos[0])

  const handleUpdateTodo = (todo: ITodo): void => {
    return;
  }

  const doneTodoCheck = (e: { target: HTMLInputElement; }): void => {

    const id : string | undefined = e.target.dataset.id
    if (id === undefined) {
      return;
    }
    
    props.handleDoneTodo(id)
  }

  return (
    <React.Fragment>
      <table className="p-tasklist">
        <thead>
          <tr>
            <th>No.</th>
            <th>タスク名</th>
            <th>タスク詳細</th>
            <th>おしまいチェック</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo: ITodo) => (
            <tr key={todo._id}>
              <td className={todo.status ? 'is_done' : ''}>{todo._id}</td>
              <td className={todo.status ? 'is_done' : ''}>{todo.name}</td>
              <td className={todo.status ? 'is_done' : ''}>{todo.description}</td>
              <td><input type="checkbox" data-id={todo._id} onChange={e => doneTodoCheck(e)} checked={todo.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateTodoContainer todo={updateTodo} handleUpdateTodo={todo => handleUpdateTodo(todo)} />
    </React.Fragment>
  )
}

export default DisplayTodoLists