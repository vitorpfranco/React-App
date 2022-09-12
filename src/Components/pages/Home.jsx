import styles from './Home.module.css'
import savings from '../../imgs/savings.svg'
import LinkButton from '../layout/LinkButton'
export default function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>MoneyApp</span></h1>
            <p>Gerencie seus projetos da melhor maneira!</p>
            <LinkButton to='/addprojeto' text='Criar Projeto' />
            <img src={savings} alt="MoneyApp" />
        </section>)
}