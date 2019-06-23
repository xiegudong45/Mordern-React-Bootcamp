import React, {Component} from "react";

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {score : 0};
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }
    singleKill() {
        this.setState(this.incrementScore);
    }
    // tripleKill() {
    //     this.setState({score: this.state.score + 1});
    //     this.setState({score: this.state.score + 1});
    //     this.setState({score: this.state.score + 1});
    // }

    // version1 : use setState Callback Form

    // tripleKill() {
    //     this.setState(st => {
    //         return {score: st.score + 1};
    //     });
    //     this.setState(st => {
    //         return {score: st.score + 1};
    //     });
    //     this.setState(st => {
    //         return {score: st.score + 1};
    //     });
    // }

    // version2 : Abstracting State Updates

    incrementScore(curState) {
        return {score: curState.score + 1};
    }
    tripleKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.tripleKill}>Triple Kill!</button>
            </div>
        )
    }
}

export default ScoreKeeper;