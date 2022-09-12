import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './ProjectForm.module.css'
export default function ProjectForm({btnText}) {
    return (
        <form className={style.form}>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do Projeto"></Input>
            <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total"></Input>
            <Select name="category_ID" text="Categoria do Projeto"></Select>
            <SubmitButton text={btnText}></SubmitButton>
        </form>
        
    )
}