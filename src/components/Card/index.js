import { useFavoritoContext } from 'Contextos/Favoritos'
import styles from './Card.module.css'
import iconFavoritar from './favoritar.png'
import iconDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom'


export default function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconFavoritar: iconDesfavoritar
    return (
        <div className={styles.container}>
        <Link className={styles.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
        </Link>
            <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() => {
                adicionarFavorito({ id, titulo, capa })
            }}/>
            
        </div>
    )
}