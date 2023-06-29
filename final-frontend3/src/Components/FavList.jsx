import { useState } from "react";
import FavCard from "./FavCard";

const FavList = () => {
    const [ favoriteDoctor, setFavoriteDoctor] = useState( JSON.parse(localStorage.getItem('favoriteDoctor') || '[]'))
    
    function delFavDoctor(delDoctor) {
        const deletedDoctor = favoriteDoctor.filter(
          doctor => doctor.id !== delDoctor.id
        )
        setFavoriteDoctor(deletedDoctor)
        localStorage.setItem('favoriteDoctor', JSON.stringify(deletedDoctor))
    }
    
    return(
        <>
            {favoriteDoctor.length === 0 ? (
                <h1>
                Aun no has guardado a ningun doctor en tus favoritos
                </h1>
            ) : (
                <h1>
                Estos son tus doctores guardados
                </h1>
            )}

            <section>
                <ul>
                    {favoriteDoctor.map(doctor => (
                        <FavCard key={doctor.id} doctor={doctor} delDoctor={delFavDoctor}/>
                    ))}
                </ul>
            </section>
        </>
    )
};
  
export default FavList;