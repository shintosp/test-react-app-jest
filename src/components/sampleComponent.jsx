import React, { Component } from 'react';
import LiftingStateup from './ancestorComponent';
import { connect } from 'tls';
class SamplePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            parentState: ""
        }
        //this.inputRef = React.createRef();
    }
    handleInput = (propValue) => {
        //this.setState({childState: e.target.value});
        console.log(propValue)
    }
    render() { 
        return (  
            <div>
                <LiftingStateup onEnter={this.handleInput} />
            </div>
        );
    }
    // componentDidMount() {
    //     this.inputRef.current.focus();
    // }
}


connect()
 
export default SamplePage;