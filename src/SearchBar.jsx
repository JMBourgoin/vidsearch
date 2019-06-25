import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: 'search'
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.state.term);
    }

    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            term: e.target.value
        })
    }

    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" name="search" type="text" value={this.state.term} onChange={this.handleInputChange}/>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;