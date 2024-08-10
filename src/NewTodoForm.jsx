import { useState } from "react"

export function NewTodoForm({ onSubmit }) { //NewTodoForm({props}) - Alternate and more relavant
    const [newItem, setNewItem] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === '') return

        onSubmit(newItem) // props.onSubmit(newItem) - ALternate

        setNewItem('')
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <label htmlFor='item'>New Item</label>
            <div className='form-row'>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type='text'
                    id='item'
                />
            <button className='btn i'>Add New</button>
            </div>
        </form>
    )
}