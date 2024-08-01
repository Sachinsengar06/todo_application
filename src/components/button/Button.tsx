interface ButtonProps {
    text:string;
}
const Button = ({text}:ButtonProps) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
export default Button;
