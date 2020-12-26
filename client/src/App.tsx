import React, { useEffect, useState } from 'react'
import './style/main.scss';
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
import CreateTodoContainer from './component/CreateTodoContainer'
import DisplayTodoLists from './component/DisplayTodoLists'

// DBと繋げないため、とりあえずフロントでかちゃかちゃ動かすための初期データ
const initialTaskData: ITodo[] = [
  {
    _id: 'task1',
    name: 'Reactチュートリアルを学ぶ',
    description: '最初はここからはじめると良いらしいと聞いた。React公式ページから。',
    status: false
  },{
    _id: 'task2',
    name: 'TypeScriptの基礎を学ぶ',
    description: 'Qiitaで。公式がうまいこと日本語になってなかったから、とりあえず必要そうなところだけ。',
    status: false    
  }, {
    _id: 'task3',
    name: 'hookの概念を学ぶ',
    description: 'React公式ページから学ぶ。とりあえず、stateかな。',
    status: false
  }
];

const App: React.FC = () => {
  const initialCount = initialTaskData.length + 1

  // タスク追加時に一意のIDを生成するためのカウンターを定義
  const [count, setCount] = useState(initialCount)
  const [todos, setTodos] = useState<ITodo[]>(initialTaskData)

  /* ここからapiやりとり絡むので一旦無視 ------------------------------------- */

  const testData: ITodo = {
    _id: '1',
    name: 'テストのタスク',
    description: 'テストのタスクディスクリプション',
    status: false
  };

  useEffect(() => {
    fetchTodos()
    // レンダリングしたらすぐにダミーデータを追加するよう処理（テスト用）
    handleSaveTodo(testData)
    test()
  }, [])

  const fetchTodos = (): void => {
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any) => {
      setTodos(todos)
    })
    .catch((err: Error) => console.log(err))
  }

  const handleSaveTodo = (data: ITodo): void => {
    addTodo(data)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved")
        }
        setTodos(data.todos)
        console.log(todos)
      })
      .catch(err => console.log(err))
  }

  // 正常に動いているか確認する用
  const test = (): void => {
    console.log('hello')
  }

  /* ここまで ---------------------------------------------------------- */

  const handleCreateTodo = (title: string, description: string): void => {
    const timestamp = Date()
    const id = 'task' + count
    const newTodo: ITodo = {
      _id: id,
      name: title,
      description: description,
      status: false,
      createdAt: timestamp
    }

    // タスクを追加
    const todosCopy = todos.slice()
    todosCopy.push(newTodo)
    setTodos(todosCopy)

    // countの更新
    setCount(count + 1)
  }

  const handleDoneTodo = (_id: string):void => {
    // 更新するindexを特定
    const targetTodoIdx: number | undefined = todos.findIndex(todo => todo._id === _id)
    if (targetTodoIdx === undefined) {
      return
    }

    // タスクの更新
    const todosCopy = todos.slice()
    todosCopy[targetTodoIdx].status = !todosCopy[targetTodoIdx].status
    setTodos(todosCopy)
    console.log(todosCopy)
  }

  const handleUpdateTodo = (targetTodo: ITodo): void => {
    console.log(targetTodo)
    // 更新するindexを特定
    const targetTodoIdx: number = todos.findIndex(todo => todo._id === targetTodo._id)

    // タスクの更新
    const todosCopy = todos.slice()
    todosCopy[targetTodoIdx] = Object.assign(todos[targetTodoIdx], targetTodo)
    setTodos(todosCopy)
  }

  return (
    <main className='App'>
      <h1>タスク管理アプリ</h1>
      {/* <ul>
        {todos.map((todo: ITodo) => (
          <li key={todo._id}>{todo.name}</li>
        ))}
      </ul> */}
      <CreateTodoContainer
        handleCreateTodo={(title, description) => handleCreateTodo(title, description)}
      />
      <DisplayTodoLists todos={todos} handleDoneTodo={_id => handleDoneTodo(_id)} handleUpdateTodo={handleUpdateTodo} />
    </main>
  )
}

export default App