import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Bitte Text einfügen!')
            return
        }

        onAdd({ text })
        setText('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
        <label>Content</label>
        <input type='text' placeholder='Add Content' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        <input type='submit' value='Save Content' className='btn btn-block'/>
    </form>
  )
}

export default AddTask