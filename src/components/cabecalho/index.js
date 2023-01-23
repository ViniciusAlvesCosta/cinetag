import { Link } from 'react-router-dom'
import styles from './cabecalho.module.css'
import CabecalhoLink from './cabecalhoLink'
import Logo from './Logo-cinetag-branco 1.png'


export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={Logo} alt="Logo do Cinetag" />
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}