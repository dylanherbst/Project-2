import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ShowPage from "../Pages/SingleCoinPage";
import LoginForm from "../Pages/LoginPage";
import ProfilePage from "../Pages/ProfilePage";
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
 