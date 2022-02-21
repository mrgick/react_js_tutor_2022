import React, { useEffect, useState } from 'react'

export const useMyHookTest = (value) => {
    const [text,setText] = useState();

    useEffect(()=>{
        setText(value)
    },[value])

    return text;
}