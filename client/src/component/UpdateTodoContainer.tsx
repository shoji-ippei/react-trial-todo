import React, { useState } from 'react'

type UpdateTodoContainerProps = {
  todo: ITodo
  handleUpdateTodo: (todo: ITodo) => void
  flag: boolean
}
const UpdateTodoContainer: React.FC<UpdateTodoContainerProps> = (props) => {
  const [updateTodo, setupdateTodo] = useState(props.todo)
  
  if (!props.flag) return null

  const changeUpdateTodo = (e: React.ChangeEvent<HTMLInputElement>, property: string): void => {
    const value = e.target.value
    const copyUpdateTodo = { ...updateTodo }
    if (property === 'name') {
      copyUpdateTodo.name = value
    } else {
      copyUpdateTodo.description = value
    }
    setupdateTodo(copyUpdateTodo)
  }
  
  return (
    <div className="p-updatetask">
      <div className="p-updatetask__form">
        <div className="p-updatetask__form_item">
          <input type="text" name="u-task-title" id="u-task-title" value={updateTodo.name} onChange={e => changeUpdateTodo(e, 'name')} />
        </div>
        <div className="p-updatetask__form_item">
          <input type="text" name="u-task-description" id="u-task-description" value={updateTodo.description} onChange={e => changeUpdateTodo(e, 'description')} />
        </div>
        <div className="p-updatetask__form_item">
          <button>タスクの更新</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateTodoContainer