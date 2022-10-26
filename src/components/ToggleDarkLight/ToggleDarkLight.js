import React, { useState, useEffect } from 'react';
import './ToggleDarkLight.css'

function ToggleDarkLight() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`ToggleDarkLight ${theme}`}>
            <div className='bg-info rounded py-2 px-4 text-primary fw-bold'>
                <label onClick={toggleTheme} className="switch">
                    <input type='checkbox' onChange='checked' />
                    <span className='slider round'></span>
                </label>

            </div>
        </div>
    );
}
export default ToggleDarkLight;