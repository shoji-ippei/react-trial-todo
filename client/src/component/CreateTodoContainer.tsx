import React, {useState} from 'react'
import AlartEmptyText from './AlartEmptyText'

type CreateTaskContainerProps = {
  handleCreateTodo: (title: string, description: string) => void
}

const CreateTaskContainer: React.FC<CreateTaskContainerProps> = (props) => {

  const [isTitleEmpty, setIsTitleEmpty] = useState(false)
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false)

  const createTodoBtnSubmit = (): void => {

    let isCreateTodoFlug = false
    
    // 入力値を取得
    const titleElement:HTMLInputElement = document.querySelector('#task-title') as HTMLInputElement
    const title = titleElement.value
    const descriptionElement:HTMLInputElement = document.querySelector('#task-description') as HTMLInputElement
    const description = descriptionElement.value

    if (title && description) {
      isCreateTodoFlug = true
    }

    !title ? setIsTitleEmpty(true) : setIsTitleEmpty(false)
    !description ? setIsDescriptionEmpty(true) : setIsDescriptionEmpty(false)

    if (isCreateTodoFlug) {
      // 親要素の関数呼び出し
      props.handleCreateTodo(title, description)

      // 入力画面のリセット
      titleElement.value = ''
      descriptionElement.value = ''
      setIsTitleEmpty(false)
      setIsDescriptionEmpty(false)
    }
  }

  return (
    <div className="p-createtask">
      <div className="p-createtask__ttl">
        <p>タスクの追加をする</p>
      </div>
      <div className="p-createtask__form">
        <div className="p-createtask__form_item">
          <p>名前</p>
          <AlartEmptyText isTextEmpty={isTitleEmpty} item='タイトル' />
          <input type="text" name="task-title" id="task-title" />
        </div>
        <div className="p-createtask__form_item">
          <p>メモ</p>
          <AlartEmptyText isTextEmpty={isDescriptionEmpty} item='メモ' />
          <textarea name="task-description" id="task-description"></textarea>
        </div>
        <div className="p-createtask__form_item">
          <button onClick={createTodoBtnSubmit}>タスクの追加</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskContainer