import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthenticationProvider';

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    console.log(isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? children : null;
}

export default ProtectedRoute;
