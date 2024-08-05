import styles from './Button.module.css';

interface ButtonProps {
    text:string;
    handleClick:()=>void
    icon?:string;
}
const Button = ({text, handleClick}:ButtonProps) => {
  return (
    <div className = {styles.text_button} onClick={handleClick}>
      <p style={{color:"white"}} >{text}</p>
    </div>
  )
}
export default Button;
