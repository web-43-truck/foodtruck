import React from "react";

    const initialValues :{
        profilePassword: '',
        profileEmail: '',
    }

    const onSumbit =(values: any) =>{

    }

export default function logIn () {
    return (
        <>
           <div>Truck Hunter Login</div>


            <div className={"inputContainer"}>

                <input

                    //value={email}

                    placeholder="Enter your email here"

                    //onChange={ev => setEmail(ev.target.value)}

                    className={"inputBox"}/>

                {/*<label className="errorLabel">{emailError}</label>*/}

            </div>

            <br/>

            <div className={"inputContainer"}>

                <input

                    //value={password}

                    placeholder="Enter your password here"

                    //onChange={ev => setPassword(ev.target.value)}

                    className={"inputBox"}/>

                {/*<label className="errorLabel">{passwordError}</label>*/}

            </div>

            <br/>

            <div className={"inputContainer"}>

                <input

                    className={"inputButton"}

                    type="button"

                    //onClick={onButtonClick}

                    value={"Log in"}/>

            </div>


        </>
    )
}