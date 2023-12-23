import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {

    const { logOut, user } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-purple-600 lg:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                        {navlinks}
                        
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Task Manager</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                    {navlinks}
                   
                </ul>
            </div>
            <div className="navbar-end">
            
                {
                    user && <img className="rounded-full w-8 h-8 md:w-10 mr-3 md:h-10" src={user?.photoURL} />
                }

                {
                    user && <p className="text-white text-sm md:text-lg mr-3 font-bold">{user?.displayName}</p>
                }
                {
                    user ? <button onClick={handleLogOut} className="btn btn-outline bg-white">LogOut</button> : <Link to='/login'>
                    <button className="btn btn-outline bg-white">Login</button>
                    </Link>
                }
            
            </div>
        </div>
    );
};

export default Navbar;