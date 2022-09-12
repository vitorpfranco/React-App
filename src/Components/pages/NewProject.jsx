import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
export default function NewProject(){
    return(
        <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <ProjectForm btnText="Criar Projeto"></ProjectForm>
        </div>
    )
}