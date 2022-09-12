import style from './Select.module.css'
export default function Select({text,name,options,handleOnChange, value}){
return(
    <div className={style.form_control}>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name} onChange={handleOnChange} value={value}>
            <option disabled selected>Selecione uma opção</option>
        </select>
    </div>
)
}