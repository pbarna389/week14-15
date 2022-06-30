import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }

        console.log("Constructor called!");
    }

    componentDidMount() {
        console.log("Component created");
        setInterval(() => { this.incrementTimer() }, 1000);
    }

    componentDidUpdate() {
        console.log("Component updated!");
    }

    componentWillUnmount() {
        console.log("Component unmounted")
    }

    incrementTimer() {
        this.setState({
            time: this.state.time + 1
        })
    }

    render() {
        // console.log("render happened!")
        return (
            <>
                <div className={(this.state.time % 5 === 0) ? "green" : ""}>
                    {this.state.time}
                </div>
                <button onClick={() => { this.incrementTimer() }}>Increment</button>
            </>
        )
    }
}

export default Timer  