import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props){
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
    }
    
    const themeValues = {
        value: theme,
        changeTheme: toggleTheme,
    }

    console.log(theme)

    return (
        <ThemeContext.Provider value={themeValues}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;