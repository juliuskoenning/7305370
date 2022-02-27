// Matrikelnummer: 7305370
import { FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Content = ({ content, onDelete }) => {
  const {nachname} = useParams();
  return (
    <div className='content'>
        <h3>
        {content.text}{' '}
        {content.name === nachname ? (
        <FaTimes
            style={{ color:'red', cursor:
            'pointer' }}
            onClick={() => onDelete(content.id)}
            />):null}
        </h3>
        <p>{content.name}</p>
        <p>{content.email}</p>
    </div>
  )
}

export default Content