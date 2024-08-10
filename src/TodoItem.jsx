export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li className="li-lists">
            <label>
                <input
                    type='checkbox'
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className='btn btn-danger'>X</button>
        </li>
    )
}