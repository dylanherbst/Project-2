import { useState } from "react";
import { useUserContext } from "../CONTEXT FOLODER/user Context";
import NavBar from "../COMPONENTS FOLDER/NavBar";


export default function ProfilePage () {

    const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();



    return(
        <>
        {/* <NavBar></NavBar> */}
        <h1>Your Account</h1>
        <h2>{currentUser.userName}</h2>
        <h3>{currentUser.email}</h3>
        <button onClick={() => handleLogOut({})}>Log Out</button>
        
        
        
        </>
    )
}
