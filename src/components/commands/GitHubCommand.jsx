import React from 'react';
import CommandLine from '../CommandLine.js';

const GitHubCommand = (props) => {
    const command = props.command;

    window.open('https://github.com/amaliegay', '_blank')
    return <CommandLine command={command}></CommandLine>;
};

export default GitHubCommand;