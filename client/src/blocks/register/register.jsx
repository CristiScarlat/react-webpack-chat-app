import React from 'react'
import InputWithButton from 'components/inputWithButton/inputWithButton.jsx'
import './register.css'

const RegisterWithName = ({handleRegisterName}) => {
    return (
        <div className="register-container">

            <div className="form-container">
                <p>Tell me your name</p>
                <InputWithButton buttonLabel="register" handleButtonOnClick={handleRegisterName} useValidation={false}/>
            </div>
        </div>
    )
}

export default RegisterWithName
