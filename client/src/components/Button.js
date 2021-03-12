
function Button(props) {

    const styles = {
        button: {
            backgroundColor: props.color,
            color: 'white'
        }
    }

    return (
        <button 
            className="button"
            type={props.type}
            style={styles.button}
        >
        {props.name}
        </button>
    )
}

export default Button;