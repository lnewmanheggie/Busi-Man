import React from 'react';

function Input(props) {

    const styles = {
        input: {
            border: `1px solid ${props.color}`,
        }
    }

    return(
        <div className="field">
            <div className="control">
                <input 
                    className='input' 
                    type={props.type}
                    placeholder={props.placeholder} 
                    name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                    style={styles.input}
                    id={props.id}
                    // ref={props.useRef}
                />
            </div>
        </div>
    )
}

export default Input;