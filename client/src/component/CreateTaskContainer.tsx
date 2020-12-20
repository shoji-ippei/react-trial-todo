import React from 'react'

type CreateTaskContainerProps = {
  createTaskBtnSubmit: (title: string, description: string) => void
}

const CreateTaskContainer: React.FC<CreateTaskContainerProps> = (props) => {

  const createTaskBtnSubmit = (): void => {
    
    // 入力値を取得
    const titleElement:HTMLInputElement = document.querySelector('#task-title') as HTMLInputElement
    const title = titleElement.value
    const descriptionElement:HTMLInputElement = document.querySelector('#task-description') as HTMLInputElement
    const description = descriptionElement.value

    // 親要素の関数呼び出し
    props.createTaskBtnSubmit(title, description)

    // 入力画面のリセット
    titleElement.value = '';
    descriptionElement.value = '';
  }

  return (
    <div className="p-createtask">
      <div className="p-createtask__ttl">
        <p>タスクの追加</p>
      </div>
      <div className="p-createtask__form">
        <div className="p-createtask__form_item">
          <input type="text" name="task-title" id="task-title" />
        </div>
        <div className="p-createtask__form_item">
          <textarea name="task-description" id="task-description"></textarea>
        </div>
        <div className="p-createtask__form_item">
          <button onClick={createTaskBtnSubmit}>タスクの追加</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskContainer