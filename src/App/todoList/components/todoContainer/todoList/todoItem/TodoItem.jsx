import { useState } from 'react'
import style from './TodoItem.module.css'

export const TodoItem = ({ todo, index, updateTodo, deleteTodo, isSubmitting }) => {
    const [isActive, setIsActive] = useState(true)
    // const [menuIsOpen, setMenuIsOpen] = useState(false)
    return (
        <div className={style.todoItemContainer}>
            <div
                className={`${style.todoItem} ${isActive && style.oneLine}`}
                onClick={() => setIsActive(!isActive)}
            >
                {`${index + 1}. `}{todo.title}
            </div>
            <div
                className={`${style.button} ${style.greenButton} ${todo.completed && style.green}`}
                onClick={() => updateTodo(todo)}
            >
                ✔
            </div>
            <div
                className={`${style.button} ${style.redButton}`}
                onClick={() => deleteTodo(todo.id)}
            >
                ✖
            </div>
        </div>

    )
}