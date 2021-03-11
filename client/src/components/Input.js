import React from 'react';

function Input(props) {

    let fail = props.fail;

    return(
        <div className="field">
            <label className="label">Label</label>
                <div className="control">
                    <input 
                        className={`input ${fail ? 'input is-danger' : null}`} 
                        type={props.type}
                        placeholder={props.placeholder} 
                        name={props.name}
                        value={props.value}
                        onChange={props.handleChange}
                    />
                </div>
            <p className="help">This is a help text</p>
        </div>
    )
}

export default Input;