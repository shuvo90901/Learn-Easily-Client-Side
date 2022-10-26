import React, { useState, useEffect } from 'react';
import './ToggleDarkLight.css'

function ToggleDarkLight() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme('dark')
    };
    const toogleThemeLight = () => {
        setTheme('light')
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`ToggleDarkLight ${theme}`}>
            <div className='bg-info rounded py-2 px-4 text-primary fw-bold'>
                <button className='btn-dark' onClick={toggleTheme}>Dark</button>
                <button className='btn-light ps-5' onClick={toogleThemeLight}>Light</button>
            </div>
        </div>
    );
}
export default ToggleDarkLight;