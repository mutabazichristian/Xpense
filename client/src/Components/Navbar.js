import React from "react";
import profileImage from "../Assets/profileImage.svg"
import ListNavigationList from "./ListNavigation";
import BtnNewExpense from "./BtnNewExpense";
import { useRef } from "react";

function Navbar() {
    return (
        <div className="navbar" >
            <img src={profileImage} alt="profile" />
            <ListNavigationList />
            <BtnNewExpense />
        </div>
    )
}

export default Navbar