import React from "react";
import Logo from "./assets/logo.svg";

export default () => {
    return <>
        <h1>
            Simple React App
            <img src={Logo} alt="React"/>
        </h1>
    </>
}
