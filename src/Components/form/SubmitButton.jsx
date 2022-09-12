import style from './SubmitButton.module.css'
export default function Button({text}){
return(
<div >
    <button className= {style.btn} >
{text}
    </button>
    </div>
)
}