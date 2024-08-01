import styles from './InputForm.module.css'
interface ButtonProps{
    text:string;
    closeCard:()=>void;
}
const InputForm = ({text,closeCard}:ButtonProps) => {
  return (
    <div className = {styles.input_container}>
      <input type="text" placeholder="Title" />
      <textarea placeholder="description" />
      <button onClick={closeCard}>{text}</button>
    </div>
  )
}

export default InputForm;
