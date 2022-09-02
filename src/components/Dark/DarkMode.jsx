import React, { useState, useEffect } from 'react';


const light = {
    bgcolor: '#black',
    maincolor: '#fwhitefff8c',
}

const dark = {
    bgcolor: "white",
    maincolor: 'black',
}

const DarkMode = () => {
    const [mode, setMode] = useState('light')

    function ChangeMode() {
        mode === 'dark' ? setMode('light') : setMode('dark')
    }
    return {
        mode, ChangeMode,
    };
}

export default DarkMode;
