import { Route, Routes } from "react-router-dom";
import HomePage from "../PAGES FOLDER/HomePage";
import ShowPage from "../PAGES FOLDER/SingleCoinPage";
import LoginForm from "../PAGES FOLDER/LoginPage";
import ProfilePage from "../PAGES FOLDER/ProfilePage";
import ProtectedRoute  from "./ProtectedRoute";

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
 