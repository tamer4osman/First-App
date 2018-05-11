import React from "react";
import PropTypes from 'prop-types';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: ""
        }
    }

    update(e) {
        this.setState({ txt: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>{this.state.txt}</h1>
               <Widget update ={this.update.bind(this)} />
               <Button> I <Heart /> React </Button>
            </div>
        )
    }
}

const Button = (props) => <button>{props.children}</button>
const Widget =(props) =>  <input type="text" onChange={props.update.bind(this)} />

class Heart extends Component {
    render() {
        return <span>&hearts;</span>
    }
}

export default App