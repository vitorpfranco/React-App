import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../../imgs/costs_logo.png'

export default function NavBar(props) {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt="costs" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/projetos'>Projetos</Link></li>
                    <li className={styles.item}><Link to='/sobre'>Sobre</Link></li>
                    <li className={styles.item}><Link to='/contato'>Contato</Link></li> 
                </ul>
            </Container>
        </nav>) 
}