import React from 'react';
import CommandLine from './CommandLine.jsx'

const CommandError = (props) => {
    const command = props.command;

    return (
        <>
            <CommandLine command={command}></CommandLine>
            <p class="error">command not found: {command}</p>
        </>
    );
};

export default CommandError;