import { Navigate, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <>
            <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </>
    }
    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>


};

export default PrivateRoute;