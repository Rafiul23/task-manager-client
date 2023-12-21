import { Link } from 'react-router-dom';
import registerImg from '../../assets/register.png'

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center md:w-1/2 w-full lg:text-left">
                    <img src={registerImg} alt="" />
                    
                </div>
                <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                        <h1 className="text-5xl text-purple-600 font-bold mb-4">Register now!</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" placeholder="Photo" className="" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <p className='mb-3'>Already have an account? Please <Link to='/login' className='text-blue-600 font-bold'>Login</Link></p>
                            <button className="btn bg-purple-600 text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;