import { useContext } from 'react'
import { GlobalContext } from "../Contexts/GlobalContext";
import Card from './Card'
import styles from '../Styles.module.css'

const List = (props) => {
    const { doctors } = useContext(GlobalContext)
    console.log(doctors)

    return (
        <section>
            <ul className={styles.cardSection}>
                {doctors.map(doctor => (
                    <Card key={doctor.id} doctor={doctor}/>
                ))}
            </ul>
        </section>
    );
};
  
export default List;