import CommandError from './components/CommandError.jsx'
import GitHubCommand from './components/commands/GitHubCommand.jsx'
import './Terminal.css'

function autoFocus() {
    input = document.getElementById("prompt");
    $(document).on('keydown', function (e) {
        input.focus();
    });
}

function handleSubmit() {
    setInputValue('');

    let newElement;

    const args = inputValue.trim().split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'github' || 'gh': {
            newElement = <GitHubCommand command={inputValue} args={args}></GitHubCommand>
            break;
        }
        default:
            newElement = <CommandError command={inputValue}></CommandError>
            break;

    }
}

const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        handleSubmit();
    }
};

function Logo() {
    return (
        <div className="logo">
            <pre className='no-margin'> _  _ __  __ _     _____</pre>
            <pre className='no-margin'>| |/ |  \/  | |   | ____|</pre>
            <pre className='no-margin'>| ' /| |\/| | |   |  _|</pre>
            <pre className='no-margin'>| . \| |  | | |___| |___</pre>
            <pre className='no-margin'>|_|\_|_|  |_|_____|_____|</pre>
        </div>
    )
}

function CommandList() {
    return (
        <>
            <p>For a list of available commands, type `help`.</p>
            <div className="command-list">
                <p>Commands:</p>
                <table className="paddingBetweenCols">
                    <tr>
                        <td><a id="link_gh" href="https://github.com/amaliegay" target="_blank" className="command">github</a></td>
                        <td><a href="https://github.com/amaliegay" target="_blank" className="command-description">links to
                            my Github profile</a></td>
                    </tr>
                </table>
                <br />
                <br />
                <br />
            </div>
        </>
    )
}

useEffect(() => {
    if (commandRef.current) {
        commandRef.current.focus();
    }
}, []);

function CommandPrompt() {
    const commandRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    return (
        <div className='cmd-prompt'>
            <span className='username'>guest</span>
            <span>@</span>
            <span className='domain-name'>chenx.ing</span>
            <span>:~ $</span>
            <input id="prompt" type="text" autofocus="" autocomplete="off" ref={commandRef} value={inputValue} onKeyDown={handleKeyPress}></input>
        </div>
    )
}

function Terminal() {
    return (
        <>
            <div id="terminal" onLoad="autoFocus()">
                <Logo />
                <CommandList />
                <CommandPrompt />
                <p id="return" />
            </div >
        </>
    )
}

export default Terminal