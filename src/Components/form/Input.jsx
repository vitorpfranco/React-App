import style from './Input.module.css'
export default function Input({type,text,name,placeholder,handleOnChange, value}){
return(
    <div className={style.form_control}>
        <label htmlFor={name}>{text}</label>
        <input name={name} type={type} placeholder={placeholder} id={name} onChange={handleOnChange} value={value}/>
    </div>
)
}