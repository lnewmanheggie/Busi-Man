
function Button(props) {

    const styles = {
        button: {
            backgroundColor: props.color,
            margin: props.margin,
            color: 'white'
        }
    }

    return (
        <button 
            className="button"
            type={props.type}
            style={styles.button}
            onClick={props.handleClick}
        >
        {props.name}
        </button>
    )
}

export default Button;