import { Route, Routes } from "react-router-dom";
import HomePage from "../PAGES FOLDER/Home Page";
import ShowPage from "../PAGES FOLDER/Show Page";
import LoginForm from "../PAGES FOLDER/Login form Page";
import ProfilePage from "../PAGES FOLDER/Profile Page";

function AppRoutes(props) {

    return (
    <Routes>
        
    {/* index matches on default/home URL: / */}
    <Route index element={<HomePage {...props} />} />
    <Route path="/:id" element={<ShowPage />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/profile" element={<ProfilePage />} />
    

    </Routes>
    )
    }
    
    export default AppRoutes;
    // Name this file AppRoutes.jsx and store in new folder 'routes'