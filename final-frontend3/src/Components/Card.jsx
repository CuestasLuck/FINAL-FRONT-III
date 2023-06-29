import styles from '../Styles.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { doctor } = props

  return (
    <li className={styles.card}>

      <p>
        <span className='titulo'>Nombre:</span> {doctor.name}
      </p>
      <hr></hr>
      <p>
        <span className='titulo'>User:</span> {doctor.username}
      </p>
      <hr></hr>
      <Link to={`/dentist/${doctor.id}`}>Detalles</Link>
      <hr></hr>
    </li>
  );
};

export default Card;
