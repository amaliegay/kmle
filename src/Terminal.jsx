import './Terminal.css'

function autoFocus() {
    input = document.getElementById("prompt");
    $(document).on('keydown', function (e) {
        input.focus();
    });
}

function parse() {
    command = document.getElementById("prompt").value;
    document.getElementById("prompt").value = "";
    url = "";
    text = "";
    color = "";
    switch (command) {
        case 'github' || 'gh': {
            url = "https://github.com/amaliegay";

            break;
        }
        default: {
            text = `'${command}' is not a valid command`;
            color = "text-red";
            break;
        }
    }
    document.getElementById("return").innerHTML = text;
    document.getElementById("return").className = color;
    window = window.open(url, '_self');
}

function onKeyDown(event) {
    if (event.keyCode === 13) {
        parse();
    }
}

function Terminal() {
    return (
        <>
            <div id="terminal" onLoad={autoFocus}>
                <div className="logo">
                    <pre className='no-margin'> _  _ __  __ _     _____</pre>
                    <pre className='no-margin'>| |/ |  \/  | |   | ____|</pre>
                    <pre className='no-margin'>| ' /| |\/| | |   |  _|</pre>
                    <pre className='no-margin'>| . \| |  | | |___| |___</pre>
                    <pre className='no-margin'>|_|\_|_|  |_|_____|_____|</pre>
                </div>
                <p>For a list of available commands, type `help`.</p>
                <div className="commands">
                    <p>Commands:</p>
                    <table className="paddingBetweenCols">
                        <tr>
                            <td><a id="link_gh" href="https://github.com/amaliegay" target="_blank" className="command">github</a></td>
                            <td><a href="https://github.com/amaliegay" target="_blank" className="command">links to
                                my Github profile</a></td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="cmd-prompt">
                    <div className="flex">
                        <span className="cmd-prompt text-yellow">guest</span>
                        <span className="cmd-prompt text-gray">@</span>
                        <span className="cmd-prompt text-green">chenx.ing</span>
                        <span className="cmd-prompt text-gray">:~ $</span>
                    </div>
                </div>
                <input id="prompt" type="text" className="cmd-prompt text-red" autofocus="" autocomplete="off" value="" onKeyDown={onKeyDown} />
                <p id="return" />
            </div >
        </>
    )
}

export default Terminal