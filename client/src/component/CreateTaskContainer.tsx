import React from 'react'

type CreateTaskContainerProps = {
  createTaskBtnSubmit: (title: string, description: string) => void
}

const CreateTaskContainer: React.FC<CreateTaskContainerProps> = (props) => {
  return (
    <div className="p-createtask">
      <div className="p-createtask__ttl">
        <p>タスクの追加</p>
      </div>
      <div className="p-createtask__form">
        <div className="p-createtask__form_item">
          <input type="text" name="title" value="" />
        </div>
        <div className="p-createtask__form_item">
          <textarea name="description"></textarea>
        </div>
        <div className="p-createtask__form_item">
          <button>タスクの追加</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskContainer