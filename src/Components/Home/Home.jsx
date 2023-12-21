import tasks from '../../assets/task.png'

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <img src={tasks} className='lg:w-full md:w-1/2' alt="" />
            <div className='text-purple-600 my-auto w-full md:w-1/2 md:text-left text-center'>
                <h2 className='text-3xl font-bold'>Enlist and Manage your Tasks at Task Manager</h2>
                <p className='text-xl'>It is easy and useful.</p>
                <button className='btn bg-purple-600 text-white mt-4'>Let us Explore</button>
            </div>
        </div>
    );
};

export default Home;