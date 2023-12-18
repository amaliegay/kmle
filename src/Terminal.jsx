import './Terminal.css'

function Terminal() {
    return (
        <>
            <div className="terminal">
                <div className="glow-pink margin-bottom">
                    <pre className='no-margin'> _  _ __  __ _     _____</pre>
                    <pre className='no-margin'>| |/ |  \/  | |   | ____|</pre>
                    <pre className='no-margin'>| ' /| |\/| | |   |  _|</pre>
                    <pre className='no-margin'>| . \| |  | | |___| |___</pre>
                    <pre className='no-margin'>|_|\_|_|  |_|_____|_____|</pre>
                </div>
                <p className='terminal-small'>For a list of available commands, type `help`.</p>
                <div className="terminal-small commands">
                    <p>Commands:</p>
                    <table className="paddingBetweenCols">
                        <tr>
                            <td><a id="link_gh" href="https://github.com/amaliegay" target="_blank" className="command"><span
                                className="text-yellow"> github </span></a></td>
                            <td><a href="https://github.com/amaliegay" target="_blank" class="command"><span class="text-pink">links to
                                my Github profile</span></a></td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <br />
                </div>
            </div>

        </>
    )
}

export default Terminal