import React from 'react';


function SearchBar(props) {
    return (
            <form>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search"
                        onChange={props.handleInputChange}
                        value={props.value}
                        // handleSubmit ={props.handleFilter}
                        name="search"
                    />
                </div>
            </form>
    )
}

export default SearchBar;