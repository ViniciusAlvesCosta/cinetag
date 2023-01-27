import { useFavoritoContext } from 'Contextos/Favoritos'
import styles from './Card.module.css'
import iconFavoritar from './favoritar.png'
import iconDesfavoritar from './desfavoritar.png'


export default function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconFavoritar: iconDesfavoritar
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() => {
                adicionarFavorito({ id, titulo, capa })
            }}/>
        </div>
    )
}