import { TodoItem } from "./todoItem/TodoItem"
import style from './TodoList.module.css'


export const TodoList = ({todos, isSubmitting, updateTodo, deleteTodo }) => {
    if (todos.length === 0) {
        return <p>Задач нет</p>
    }
    return (
        <div className={style.todoList}>
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    isSubmitting={isSubmitting}
                />
            ))}
        </div>
    )
}