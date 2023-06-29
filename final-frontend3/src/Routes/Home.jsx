
import { useContext } from 'react'
import List from '../Components/List'
import { ThemeContext } from '../Contexts/ThemeContext'

function Home(props){
    const theme = useContext(ThemeContext)

    return (
        <section className={theme.value}>
            <h1>
                Nuestros Medicos Mas Destacados:
            </h1>
            <List/>
        </section>
    )
}

export default Home