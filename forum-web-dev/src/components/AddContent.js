// Matrikelnummer: 7305370
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AddContent = ({ onAdd }) => {
    const location = useLocation()
    const [text, setText] = useState('')
    var name = location.state.nachname
    var email = location.state.email


    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Bitte Text einfügen!')
            return
        }

        onAdd({ text, name, email })
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

export default AddContent