import React, { useState } from 'react'
import { MouseEvent, ChangeEvent } from 'react'
import UpdateTodoContainer from './UpdateTodoContainer'


type DisplayTodoListsProps = {
  todos: ITodo[],
  handleDoneTodo: (_id: string) => void,
  handleUpdateTodo: (todo: ITodo) => void
}

const DisplayTodoLists: React.FC<DisplayTodoListsProps> = (props) => {

  const [updateTodo, setupdateTodo] = useState(props.todos[0])
  const [updateDisplayFlug, setupdateDisplayFlug] = useState(false)

  const handleUpdateTodo = (todo: ITodo): void => {
    props.handleUpdateTodo(todo)
  }

  const doneTodoCheck = (e: ChangeEvent<HTMLInputElement>): void => {

    const id : string | undefined = e.currentTarget.dataset.id
    if (id === undefined) {
      return;
    }
    
    props.handleDoneTodo(id)
  }

  const handleUpdateContainer = (e: MouseEvent<HTMLButtonElement>): void => {
    const id: string | undefined = e.currentTarget.dataset.id
    const updateTargetTodo = props.todos.find((todo: ITodo) => todo._id === id)
    if (updateTargetTodo === undefined) return
    setupdateTodo(updateTargetTodo)
    // console.log(updateTodo)
    setupdateDisplayFlug(true)
  }

  return (
    <React.Fragment>
      <table className="p-tasklist">
        <thead>
          <tr>
            <th>No.</th>
            <th>タスク名</th>
            <th>タスク詳細</th>
            <th>その他</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo: ITodo) => (
            <tr key={todo._id}>
              <td width="5" className={todo.status ? 'is_done' : ''}>{todo._id}</td>
              <td width="50" className={todo.status ? 'is_done' : ''}>{todo.name}</td>
              <td width="150" className={todo.status ? 'is_done' : ''}>{todo.description}</td>
              <td width="50">
                <button data-id={todo._id} onClick={e => handleUpdateContainer(e)}>編集</button>
                <input type="checkbox" data-id={todo._id} onChange={e => doneTodoCheck(e)} checked={todo.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateTodoContainer flag={updateDisplayFlug} todo={updateTodo} handleUpdateTodo={todo => handleUpdateTodo(todo)} />
    </React.Fragment>
  )
}

export default DisplayTodoLists