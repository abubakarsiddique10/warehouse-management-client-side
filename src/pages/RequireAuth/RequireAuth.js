import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    else if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    else if (!user.emailVerified) {
        return <p style={{ textAlign: 'center', fontSize: '40px', margin: '35%' }}>Please Verify Your Email</p>
    }
    return children;
}
export default RequireAuth;