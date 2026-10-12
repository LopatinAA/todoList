import { useTodos } from '../../hooks/useTodos';
import { TodoList } from './todoList/TodoList';
import { TodoPanel } from '../TodoPanel';
import style from './TodoContainer.module.css'

export const TodoContainer = () => {
  const {
    todos,
    isLoading,
    error,
    isSubmitting,
    addTodo,
    updateTodo,
    deleteTodo,
    clearError,
  } = useTodos();

  const handleAdd = (inputValue) => {
    addTodo({ title: inputValue, completed: false });
  };

  const handleToggle = (todo) => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  return (
    <div className={style.container}>


      <h3>Todo List</h3>

      {isLoading && <p>Загрузка списка...</p>}

      {error && (
        <div className={style.error}>
          <strong> Ошибка:</strong> {error}
          <button onClick={clearError} style={{ marginLeft: '10px' }}>✕</button>
        </div>
      )}

      <TodoPanel
        onAdd={handleAdd}
        isSubmitting={isSubmitting}
      />
       
      <TodoList
        todos={todos}
        isSubmitting={isSubmitting}
        updateTodo={handleToggle}
        deleteTodo={deleteTodo}
      />

      {/* Информация о количестве задач */}
      <p className={style.totalTasks}>
        Всего задач: {todos.length}
      </p>
    </div>
  );
}