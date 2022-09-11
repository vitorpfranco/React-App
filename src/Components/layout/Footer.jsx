import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}> 
                <li className={styles.item}>
                    <FaFacebook></FaFacebook>
                </li>
                <li className={styles.item}>
                    <FaInstagram></FaInstagram>
                </li>
                <li className={styles.item}>
                    <FaLinkedin></FaLinkedin>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>MoneyApp</span> &copy; 2021
            </p>
        </footer>
    )
}