import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.png'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {

    const {signIn, setUser} = useAuth();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User login successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
               
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 w-full lg:text-left">

                    <img src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 md:w-1/2 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl my-3 text-purple-600 font-bold">Login now!</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <p className='mb-3'>New to our website? Please <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
                            <button className="btn bg-purple-600 text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;