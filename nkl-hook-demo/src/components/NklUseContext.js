import React, { createContext, useContext, useState } from 'react'
import NklUseContext1 from './NklUseContext1';
export const ThemeContext = createContext('red');//tạo ngữ cảnh để chia sẻ
export default function NklUseContext() {
    //state
    const[theme, setTheme] = useState('red');

    //hàm thay đổi theme
    const nklHandleChange=()=>{
        setTheme(theme=='red'?'blue':'red');
    }


  return (
    <ThemeContext.Provider value= {theme}>
        <div className='alert'>
                <h2>Demo useContext</h2>
                <NklUseContext1/>
                <button onClick={nklHandleChange}>Change BgColor</button>
            </div>
       
    </ThemeContext.Provider>
     )
}
