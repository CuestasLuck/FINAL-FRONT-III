import styles from '../Styles.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { doctor, isFavorite, manageFavs } = props

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
      {isFavorite ? ( <button onClick={e => {
            e.stopPropagation()
            manageFavs(doctor)
          }}>Eliminar de Favoritos</button> ) : ( <button onClick={e => {
            e.stopPropagation()
            manageFavs(doctor)
          }}>Agregar a Favoritos</button>)}
        
      
    </li>
  );
};

export default Card;
