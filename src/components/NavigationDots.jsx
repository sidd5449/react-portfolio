import React from 'react'
import { useState } from 'react';

const NavigationDots = ({ active }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="app__navigation">
            {['home', 'about', 'work', 'contact'].map((item) => (
                    <a 
                    href={`#${item}`} 
                    onClick={() => setToggle(false)}
                    key={item}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : {  }}
                    />
            ))}

        </div>
    )
}

export default NavigationDots