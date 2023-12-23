import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo = {
                email: user?.email,
                name: user?.displayName,
                status: 'active'
            }
           axiosPublic.post('/users', userInfo)
           .then(res =>{
            console.log(res.data);
            navigate('/');
           }) 
        })
    }

    return (
        <div className="text-center p-5 ">
             <div className="divider"></div> 
            <button onClick={handleGoogleSignIn}
             className="btn btn-outline bg-purple-600">
                <FaGoogle></FaGoogle>
                Signin with Google
            </button>
        </div>
    );
};

export default SocialLogin;