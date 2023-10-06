import React from "react";
import profileImage from "../images/profileImage.svg"
import ListNavigationList from "./ListNavigation";
import BtnNewExpense from "./BtnNewExpense";

function Navbar(){

    return(
    <div className="navbar" >
        <img src={profileImage} alt="profile" />
        <ListNavigationList/>
        <BtnNewExpense/>
    </div>
    )
}

export default Navbar