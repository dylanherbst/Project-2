import { useState } from "react";
import { useUserContext } from "../CONTEXT FOLODER/user Context";
import NavBar from "../COMPONENTS FOLDER/NavBar";


function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    // destructure the context values passed via UserProvider

    const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

    // alternative using the useContext hook directly, either works
    //const {currentUser, handleUpdateUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 chars long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else {
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail, userName: userName }); // context function
        }
    }

    

    {/* if the user is already logged in, show msg instead of form */ }
    if (currentUser && currentUser.email) return (
        <>
       
        {/* <NavBar></NavBar> */}
        <p>Welcome {currentUser.userName}!</p>
     
            <button onClick={() => handleLogOut({})}>Log Out</button>
        </>
    );
    // otherwise render same form as previously, no changes

    return <>
        <form onSubmit={handleSubmit}>
        <label>Name: <input value={userName} onChange={(e) => setUserName(e.target.value)} /></label><br />
            <label>Email: <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /></label><br />
        
            <label>Password: <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} /></label><br />
       
            <button type="submit">Login</button>
        </form>
    </>
}
export default LoginForm