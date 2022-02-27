import { FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Task = ({ task, onDelete }) => {
  const {nachname} = useParams();
  console.log(nachname)
  return (
    <div className='task'>
        <h3>
        {task.text}{' '}
        {task.day === nachname ? (
        <FaTimes
            style={{ color:'red', cursor:
            'pointer' }}
            onClick={() => onDelete(task.id)}
            />):null}
        </h3>
        <p>{task.day}</p>
        <p>{task.email}</p>
    </div>
  )
}

export default Task