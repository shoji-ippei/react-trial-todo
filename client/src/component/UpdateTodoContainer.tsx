import React from 'react'

type UpdateTodoContainerProps = {
  todo: ITodo
  handleUpdateTodo: (todo: ITodo) => void
  flag: boolean
}
const UpdateTodoContainer: React.FC<UpdateTodoContainerProps> = (props) => {
  if (!props.flag) return null
  
  return (
    <div className="p-updatetask">
      <div className="p-updatetask__form">
        <div className="p-updatetask__form_item">
          <input type="text" name="u-task-title" id="u-task-title" value={props.todo.name} />
        </div>
        <div className="p-updatetask__form_item">
          <input type="text" name="u-task-description" id="u-task-description" value={props.todo.description} />
        </div>
        <div className="p-updatetask__form_item">
          <button>タスクの更新</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateTodoContainer