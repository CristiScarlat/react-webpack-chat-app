import { isValid } from 'ipaddr.js'
import React, {useEffect, useState} from 'react'
import './inputWithButton.css'

const InputWithButton = ({handleButtonOnCLick, buttonLabel="send"}) => {

    const [inputStr, setInputStr] = useState()
    const [errorMsg, setErrorMsg] = useState()

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress)
    })

    const handleKeyPress = (e) => {
        console.log(e.key)
        if(e.key === 'Enter')handleOnCLick()
    }

    const isValid = (data) => {
        const regx = /^[a-zA-Z0-9\s.,=-]*$/g
        return regx.test(data)
    }

    const handleOnChange = (e) => {
        const inputStr = e.target.value
        console.log(">>>>", inputStr)
        if(isValid(inputStr)){
            errorMsg && setErrorMsg(null)  
        }
        else{
            setErrorMsg('Only aA-zZ1234567890-=., is alowed.')
        }
        setInputStr(e.target.value)
    }

    const handleOnCLick = () => {
        if(errorMsg)return
        setInputStr("")
        handleButtonOnCLick(inputStr)
    }

    return (
        <>
            <div className="chat-input">
                <div className="input-error">{errorMsg}</div>
                <input type="text" autoComplete="on" placeholder="Type a message" onChange={handleOnChange} value={inputStr || ""}/>
                <button onClick={handleOnCLick}>
                    {buttonLabel}
                </button>
            </div>
        </>
    )
}

export default InputWithButton