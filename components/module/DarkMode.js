import React from 'react';
import { useTheme } from 'next-themes'
function DarkMode(){
    const { theme, setTheme } = useTheme();
    function toggleChangeTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <li onClick={toggleChangeTheme}>
           <i className="gg-sun" />
       </li>
   );
    
}
export default DarkMode;