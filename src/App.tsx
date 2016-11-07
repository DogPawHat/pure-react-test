import * as React from 'react';
import Clock from './Clock';
import TestForm from './TestForm';

class App extends React.Component<{},
    {
        time?: Date;
        name?: string;
    }>{
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.timerId = -1;
    }
    timerId: number
    componentDidMount = () => {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount = () => {
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState({
            time: new Date()
        });
    }

    input = (newName: string) => {
        this.setState({
            name: newName
        });
    };

    render() {
        return (
            <div>
                <Clock time={this.state.time} />
                <p>{ this.state.name}</p>
                <TestForm sendChange={this.input} />
            </div>
        )
    }
};

export default App;