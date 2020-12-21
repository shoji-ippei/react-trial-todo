import React from 'react'

type DisplayTodoListsProps = {
  todos: ITodo[],
  handleDoneTodo: (_id: string) => void
}

const DisplayTodoLists: React.FC<DisplayTodoListsProps> = (props) => {

  const doneTodoCheck = (e: { target: HTMLInputElement; }): void => {

    const id : string | undefined = e.target.dataset.id;
    if (id === undefined) {
      return;
    }
    
    props.handleDoneTodo(id)
  }

  return (
    <table>
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
            <td>{todo._id}</td>
            <td>{todo.name}</td>
            <td>{todo.description}</td>
            <td><input type="checkbox" data-id={todo._id} onChange={e => doneTodoCheck(e)} checked={todo.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DisplayTodoLists