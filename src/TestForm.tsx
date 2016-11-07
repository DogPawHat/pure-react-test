import * as React from 'react';

const TestForm: React.StatelessComponent<{
    sendChange: (string) => void;
}> = (props) => {
    const doChange: React.FormEventHandler<HTMLInputElement> = (e) => {
        props.sendChange( e.currentTarget.value)
    };
    return (
        <form >
            <input type='text' onChange={doChange} />
        </form>
    )
};

export default TestForm;