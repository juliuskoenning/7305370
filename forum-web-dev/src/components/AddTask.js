import { useState } from 'react'
import {useLocation} from 'react-router-dom';

const AddTask = ({ onAdd }) => {
    const location = useLocation()
    const [text, setText] = useState('')
    var day = location.state.nachname
    var email = location.state.email

    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Bitte Text einfügen!')
            return
        }

        onAdd({ text, day, email })
        setText('')
    }
  return (
    <div>
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
        <label>Inhalt</label>
        <input type='text' placeholder='Inhalt hinzufügen' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <input type='submit' value='Inhalt speichern' className='btn btn-block'/>
    </form>
    </div>
  )
}

export default AddTask