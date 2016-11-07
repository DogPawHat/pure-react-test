import * as React from 'react';

const Clock: React.StatelessComponent<{time: Date}> = (props) => {
    return (
        <div>
            <h1>Hello!</h1>
            <h3>The time is {props.time.getTime().toString()}</h3>
        </div>
    );
}

export default Clock;