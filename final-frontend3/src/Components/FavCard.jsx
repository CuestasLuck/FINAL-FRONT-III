const FavCard = (props) => {
    const { doctor, delDoctor } = props
    return (
        <li>
            <p>
            <span className='titulo'>Nombre:</span> {doctor.name}
            </p>
            <hr></hr>
            <p>
                <span className='titulo'>User:</span> {doctor.username}
            </p>
            <hr></hr>
            <button onClick={e => {
                e.stopPropagation()
                delDoctor(doctor)
            }}>Eliminar Doctor</button>
        </li>
    )
};
  
export default FavCard;