import React, { useState, useEffect } from 'react';
import * as Progress from 'react-native-progress';

import './Landing.css'

function Landing() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])
    return (
        <>
            {
                loading ?
                    <Progress.Circle size={30} indeterminate={true} color='rgba(255,255,255,1)' loading={loading} />
                    :
                    <section id="landing">
                        <div id="site-title">
                            <div className='leftToRight'><h1 className='karrik'>KMLE </h1><h1 className='Chinese'>陈刑很型</h1></div>
                            <h5>LOVE IS THE ONLY THOUGHT + PAIN IS THE ONLY FEELING</h5>
                        </div>
                    </section>
            }
        </>
    )
}

export default Landing
