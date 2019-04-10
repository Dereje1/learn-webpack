import React from 'react';
import Output from './output';
import './style.scss';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: '' };
    }

    
    runSquares = () =>{
        let clickTimes = 0;
        if(this.id) clearInterval(this.id)
        this.id = setInterval(() => {
            clickTimes += 1
            const display = `${clickTimes}^2 = ${Math.pow(clickTimes,2)}`
            this.setState({ display })
            if(clickTimes > 50) clearInterval(this.id)
        }, 200);
    }
    
    render() {
        return (
            <div id="Container">
                <h1> Hello Let's learn Webpack!!</h1>
                <button id="clicker" onClick={this.runSquares}>Run Squares</button>
                <Output squares ={this.state.display}/>
            </div>
        );
    }
}

export default Test;