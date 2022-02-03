import React from 'react';

class GifSearch extends React.Component {


    render() {
        return (
            <form onSubmit={(e)=> this.props.onSubmit(e)}>
                <input type="text" placeholder={"SEARCH"}/>
                <button className="ui button" > Find city </button>
            </form>
        )
    }
}

export default GifSearch;