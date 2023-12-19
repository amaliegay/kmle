import React from 'react';

const CommandLine = (props) => {
    const command = props.command;

    return (
        <div className='cmd-prompt'>
            <span className='username'>guest</span>
            <span>@</span>
            <span className='domain-name'>chenx.ing</span>
            <span>:~ $</span>
            {command}
        </div>
    );
};

export default CommandLine;