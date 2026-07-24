import { useState, useEffect, useCallback, useMemo } from 'react'
import './App.css'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: number
}

type FilterType = 'all' | 'active' | 'completed'

const STORAGE_KEY = 'react-todo-app-data'

function loadTodos(): Todo[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos)
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')
  const [animatingIds, setAnimatingIds] = useState<Set<number>>(new Set())
  const [removingIds, setRemovingIds] = useState<Set<number>>(new Set())

  // 持久化
  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  // 添加 todo
  const handleAdd = useCallback(() => {
    const text = input.trim()
    if (!text) return
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos(prev => [newTodo, ...prev])
    setInput('')
    // 入场动画标记
    setAnimatingIds(prev => new Set(prev).add(newTodo.id))
    setTimeout(() => {
      setAnimatingIds(prev => {
        const next = new Set(prev)
        next.delete(newTodo.id)
        return next
      })
    }, 400)
  }, [input])

  // 切换完成状态
  const handleToggle = useCallback((id: number) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }, [])

  // 删除 todo（带动画）
  const handleDelete = useCallback((id: number) => {
    setRemovingIds(prev => new Set(prev).add(id))
    setTimeout(() => {
      setTodos(prev => prev.filter(t => t.id !== id))
      setRemovingIds(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }, 350)
  }, [])

  // 清除已完成
  const handleClearCompleted = useCallback(() => {
    const completedIds = todos.filter(t => t.completed).map(t => t.id)
    completedIds.forEach(id => {
      setRemovingIds(prev => new Set(prev).add(id))
    })
    setTimeout(() => {
      setTodos(prev => prev.filter(t => !t.completed))
      setRemovingIds(new Set())
    }, 350)
  }, [todos])

  // 筛选后的列表
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(t => !t.completed)
      case 'completed':
        return todos.filter(t => t.completed)
      default:
        return todos
    }
  }, [todos, filter])

  // 统计
  const stats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(t => t.completed).length
    const active = total - completed
    return { total, completed, active }
  }, [todos])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="app-wrapper">
      <div className="todo-card">
        {/* 头部 */}
        <header className="todo-header">
          <h1>
            <span className="icon">📝</span> 我的任务清单
          </h1>
          <p className="subtitle">有条不紊，高效生活</p>
        </header>

        {/* 输入区域 */}
        <div className="input-section">
          <input
            type="text"
            className="todo-input"
            placeholder="✍️ 添加一个新任务..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-btn" onClick={handleAdd} disabled={!input.trim()}>
            ➕ 添加
          </button>
        </div>

        {/* 统计信息 */}
        <div className="stats-bar">
          <span className="stat-item">📊 总计: <strong>{stats.total}</strong></span>
          <span className="stat-item stat-active">🔄 进行中: <strong>{stats.active}</strong></span>
          <span className="stat-item stat-done">✅ 已完成: <strong>{stats.completed}</strong></span>
          {stats.completed > 0 && (
            <button className="clear-btn" onClick={handleClearCompleted}>
              🗑️ 清除已完成
            </button>
          )}
        </div>

        {/* 筛选按钮 */}
        <div className="filter-bar">
          {([
            ['all', '📋 全部'],
            ['active', '🔄 进行中'],
            ['completed', '✅ 已完成'],
          ] as [FilterType, string][]).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 列表 */}
        <ul className="todo-list">
          {filteredTodos.length === 0 ? (
            <li className="empty-state">
              <span className="empty-icon">🎉</span>
              <p>
                {filter === 'all'
                  ? '还没有任务，快来添加一个吧！'
                  : filter === 'active'
                    ? '所有任务都已完成！'
                    : '还没有已完成的任务'}
              </p>
            </li>
          ) : (
            filteredTodos.map(todo => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''} ${animatingIds.has(todo.id) ? 'slide-in' : ''} ${removingIds.has(todo.id) ? 'slide-out' : ''}`}
              >
                <button
                  className={`check-btn ${todo.completed ? 'checked' : ''}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {todo.completed ? '✅' : '⭕'}
                </button>
                <span className="todo-text" onClick={() => handleToggle(todo.id)}>
                  {todo.text}
                </span>
                <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>

        {/* 底部 */}
        <footer className="todo-footer">
          <p>💾 数据自动保存到本地</p>
        </footer>
      </div>
    </div>
  )
}

export default App
