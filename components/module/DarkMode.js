import React from 'react';
import { useTheme } from 'next-themes'
function DarkMode(){
    const { theme, setTheme } = useTheme();
    function toggleChangeTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <>
        <li onClick={toggleChangeTheme}><i className="gg-sun" /></li>
        </>
    //     <div>
    //     The current theme is: {theme}
    //     <button onClick={() => setTheme('light')}>Light Mode</button>
    //     <button onClick={() => setTheme('dark')}>Dark Mode</button>
    //   </div>
    );
}
export default DarkMode;