
function Button(props) {
    return (
        <button 
            className="button"
            type={props.type}
        >
        {props.name}
        </button>
    )
}

export default Button;