import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './ProjectForm.module.css'
export default function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
            method: 'GET',
            headers:{
                'content-type': 'application/json'
            }
        })
        .then((res)=> res.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch(err =>console.log(err))
    },[])

    return (
        <form className={style.form}>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do Projeto"></Input>
            <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total"></Input>
            <Select name="category_ID" text="Categoria do Projeto" options={categories}></Select>
            <SubmitButton text={btnText}></SubmitButton>
        </form>
        
    )
}