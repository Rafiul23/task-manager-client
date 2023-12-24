import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";


const MyProfile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const { user } = useAuth();

    const email = user.email;
    const axiosPublic = useAxiosPublic();

    axiosPublic.get(`/users/${email}`)
        .then(res => setUserInfo(res.data));

    return (
        <div>
           <div className='flex justify-between p-4 items-center'>
                <h2 className='text-3xl font-bold '>Name: {userInfo?.name}</h2>
                <img src={userInfo?.image} className='h-[100px] w-[100px] rounded-full' alt="" />
            </div>
            <div className='p-4 border rounded-lg'>
                
                <p>Email: {userInfo?.email}</p>

            </div> 
        </div>
    );
};

export default MyProfile;