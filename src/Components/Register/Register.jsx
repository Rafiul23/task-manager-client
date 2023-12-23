import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../assets/register.png'
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin.jsx/SocialLogin';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Register = () => {

    const { createUser, setUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
                
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    setUser(loggedUser);
                    updateProfile(loggedUser, {
                        displayName: data.name,
                        photoURL: res.data.data.display_url
                    }).then(() => {
                            console.log('Profile updated');
                        })
                        .catch((err)=>{
                            console.log(err.message);
                        })
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User logged in successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch(error => {
                    console.log(error);
                })


            const userInfo = {
                name: data.name,
                image: res.data.data.display_url,
                email: data.email,
                password: data.password,
                profession: data.profession
            }

            
            axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "User Created Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

            navigate('/');

        }

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center md:w-1/2 w-full lg:text-left">
                    <img src={registerImg} alt="" />

                </div>
                <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl text-purple-600 font-bold mb-4">Register now!</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' {...register('name', { required: true })} type="text" placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-600 mt-2">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name='photo' {...register('image', { required: true })} type="file" placeholder="Photo" className="" required />
                            {errors.image && <span className="text-red-600 mt-2">Image is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' {...register('email', {required: true})} type="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600 mt-2">Email is required</span>}
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                                })} type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className="text-red-600 mt-2">Password is required</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600 mt-2">Password should have at least a capital letter, 1 number and 1 special character</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600 mt-2">Password must be at least 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600 mt-2">Password should not be greater than 20 characters</span>}

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profession</span>
                            </label>
                            <input name='profession' {...register('profession', {required: true})} type="text" placeholder="Your profession" className="input input-bordered" required />
                            {errors.profession && <span className="text-red-600 mt-2">Profession is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <p className='mb-3'>Already have an account? Please <Link to='/login' className='text-blue-600 font-bold'>Login</Link></p>
                            <button className="btn bg-purple-600 text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
        <div className='text-center'>
            <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default Register;