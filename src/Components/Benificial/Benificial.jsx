import doctor from '../../assets/doctor1.jpg';
import engineer from '../../assets/engineer.jpg';
import lawyer from '../../assets/lawyer.jpg';

const Benificial = () => {
    return (
        <div>
            <h2 className="text-center text-3xl font-bold text-purple-600">Who are getting benifits from us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
                <div className="shadow-xl bg-purple-400">
                    <img src={doctor} className='w-full h-[200px]'/>
                    <div className="text-center p-3">
                    <h2 className="text-2xl font-bold">Dr. Katty</h2>
                    <p>Neurologist</p>
                    <p className=" font-bold">Hi! I am using this app for my daily activities.</p>
                    </div>
                </div>
                <div className="shadow-xl bg-purple-400">
                    <img src={engineer} className='w-full h-[200px]' />
                    <div className="text-center p-3">
                    <h2 className="text-2xl font-bold">Arthur Millar</h2>
                    <p>Civil Engineer</p>
                    <p className=" font-bold">I have been using this app since my university life.</p>
                    </div>
                </div>
                <div className="shadow-xl bg-purple-400">
                    <img src={lawyer} className='w-full h-[200px]' />
                    <div className="text-center p-3">
                    <h2 className="text-2xl font-bold">Jenifer Rose</h2>
                    <p>Lawyer</p>
                    <p className=" font-bold">The app is very useful and it makes my works easy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benificial;