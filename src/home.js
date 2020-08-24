import React, { Component } from 'react'
import {Para} from './stuff';
import SearchResults from './searchresults';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {char: ''};
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({char: e.target.value});
    }
    
    render() {
        return(
            <>
                <div className="content">
                    <Para txt={this.props.txt1} />
                    <Para txt={this.props.txt2} />
                </div>

                <div className="desktop">
                    <div className="searchblock">
                        <Para txt={this.props.txt3} />

                        <form>
                            <input type="text" placeholder="eg: 的" maxLength="1" minLength="1" onChange={this.handleChange}/>
                        </form>
                    </div>

                    <div className="content">
                        <SearchResults charPassed={this.state.char} />
                    </div>
                </div>
            </>
        );
    }
}

export default Home