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
    if (event.keyCode == 13) parse()
}

function Terminal() {
    return (
        <>
            <div id="terminal" onLoad="autoFocus()">
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
                            <td><a href="https://github.com/amaliegay" target="_blank" className="command-description">links to
                                my Github profile</a></td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <br />
                </div>
                <div className='cmd-prompt'>
                    <span>guest</span>
                    <span>@</span>
                    <span>chenx.ing</span>
                    <span>:~ $</span>
                    <input id="prompt" type="text" autofocus="" autocomplete="off" onkeydown="onKeyDown(event)" />
                </div>
                <p id="return" />
            </div >
        </>
    )
}

export default Terminal