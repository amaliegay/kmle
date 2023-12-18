import './Terminal.css'

function Terminal() {
    return (
        <>
            <div className="consolas glow-green">
                <pre className='no-margin'> _  _ __  __ _     _____</pre>
                <pre className='no-margin'>| |/ |  \/  | |   | ____|</pre>
                <pre className='no-margin'>| ' /| |\/| | |   |  _|</pre>
                <pre className='no-margin'>| . \| |  | | |___| |___</pre>
                <pre className='no-margin'>|_|\_|_|  |_|_____|_____|</pre>
            </div>
            <p>For a list of available commands, type `help`.</p>
        </>
    )
}

export default Terminal