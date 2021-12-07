import './Button.css'
function Button(props){
    return(
        <div className={"Button "+props.style}  onClick={props.handler}>
            {props.text}
        </div>
    )
}
export default Button;