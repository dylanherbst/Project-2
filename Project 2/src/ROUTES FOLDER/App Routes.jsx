import { Route, Routes } from "react-router-dom";
import HomePage from "../PAGES FOLDER/Home Page";
import ShowPage from "../PAGES FOLDER/Show Page";
import LoginForm from "../PAGES FOLDER/Login form Page";
import ProfilePage from "../PAGES FOLDER/Profile Page";
import ProtectedRoute  from "./Protected Route";

function AppRoutes(props) {

    return (
    <Routes>
        

    <Route index element={<ProtectedRoute><HomePage {...props} /></ProtectedRoute>} />
    <Route path="/:id" element={<ProtectedRoute><ShowPage /></ProtectedRoute>} />
    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
    
    <Route path="/login" element={<LoginForm />} />

    </Routes>
    )
    }
    
    export default AppRoutes;
    // Name this file AppRoutes.jsx and store in new folder 'routes'