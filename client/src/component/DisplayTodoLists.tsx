import React from 'react'

type DisplayTodoListsProps = {
  todos: ITodo[]
}

const DisplayTodoLists: React.FC<DisplayTodoListsProps> = (props) => {
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
            <td><input type="checkbox" data-key={todo._id} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DisplayTodoLists