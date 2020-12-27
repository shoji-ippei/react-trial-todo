import React from 'react'

type UpdateTodoContainerProps = {
  todo: ITodo
  handleUpdateTodo: (todo: ITodo) => void
  flag: boolean
}
const UpdateTodoContainer: React.FC<UpdateTodoContainerProps> = (props) => {
  if (!props.flag) return null

  const changeUpdateTodo = (e: React.ChangeEvent<HTMLInputElement>, property: string): void => {
    const value = e.target.value
    const newUpdateTodo = { ...props.todo }
    if (property === 'name') {
      newUpdateTodo.name = value
    } else {
      newUpdateTodo.description = value
    }
    props.handleUpdateTodo(newUpdateTodo)
  }

  const endUpdateTodo = (): void => {

  }
  
  return (
    <div className="p-updatetask">
      <div className="p-updatetask__form">
        <div className="p-updatetask__form_item">
          <input type="text" name="u-task-title" id="u-task-title" value={props.todo.name} onChange={e => changeUpdateTodo(e, 'name')} />
        </div>
        <div className="p-updatetask__form_item">
          <input type="text" name="u-task-description" id="u-task-description" value={props.todo.description} onChange={e => changeUpdateTodo(e, 'description')} />
        </div>
        <div className="p-updatetask__form_item">
          <button onClick={() => endUpdateTodo}>タスクの更新</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateTodoContainer