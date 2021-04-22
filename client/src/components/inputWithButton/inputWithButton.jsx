import { isValid } from 'ipaddr.js'
import React, { useEffect, useState } from 'react'
import './inputWithButton.css'

const InputWithButton = ({ handleButtonOnClick, buttonLabel = "send", useValidation=true, validationRgx=''}) => {

    const [inputStr, setInputStr] = useState()
    const [errorMsg, setErrorMsg] = useState()

    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            handleOnClick()
        }
    }

    const isValid = (data) => {
        const rgx = validationRgx
        return /^[a-zA-Z0-9\s.,=-]*$/g.test(data)
    }

    const handleOnChange = (e) => {
        const inputStr = e.target.value
        if (useValidation && !isValid(inputStr)) {
            setErrorMsg('Only aA-zZ1234567890-=., is alowed.')
        }
        errorMsg && setErrorMsg(null)
        setInputStr(e.target.value)
    }

    const handleOnClick = () => {
        if (errorMsg) return
        handleButtonOnClick(inputStr)
        setInputStr("")
    }


    return (
        <>
            <div className="chat-input">
                <div className="input-error">{errorMsg}</div>
                <input type="text" 
                placeholder="Type a message" 
                onChange={handleOnChange} 
                value={inputStr || ""} 
                onKeyDown={handleKeyPress}/>
                <button onClick={handleOnClick}>
                    {buttonLabel}
                </button>
            </div>
        </>
    )
}

export default InputWithButton