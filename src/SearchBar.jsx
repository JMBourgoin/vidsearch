import React, { useState } from 'react';


 const SearchBar = props => {
    const [term, setTerm] = useState('search');
   
   const handleSubmit = e => {
        e.preventDefault();
        props.handleSubmit(term);
    }

    const handleInputChange = e => {
        e.preventDefault();
        setTerm(e.target.value);

    }

        return (
            <div className='ui segment'>
                <form onSubmit={handleSubmit}>
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" name="search" type="text" value={term} onChange={handleInputChange}/>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
}

export default SearchBar;