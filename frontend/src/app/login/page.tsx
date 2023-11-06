
// Truck Owner Landing Page

import React from 'react';
//import {PublicProfile} from "../backend/src/apis/profile/profile.model";
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";

export default function TruckRegistration() {
    const links = [
        {linkName: 'Sign-out', href: '/'},
        {linkName: 'home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]


    return (
        <>
            <section>
                <NavBar links={links}/>
            </section>

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

                    // onClick={onButtonClick}

                    value={"Log in"}/>

            </div>
            <Footer/>

        </>
    )
}