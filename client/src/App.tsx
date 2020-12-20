import React, { useEffect, useState } from 'react'
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

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

  return (
    <main className='App'>
      <h1>タスク管理アプリ</h1>
      <ul>
        {todos.map((todo: ITodo) => (
          <li key={todo._id}>{todo.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App