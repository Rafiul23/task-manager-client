import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";


const AddTask = () => {

    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const email = user.email;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {

        
        
         
            const taskInfo = {
                task_name: data.taskname,
                deadline: data.deadline,
                task_description: data.description,
                priority: data.priority,
                status: 'todo',
                email
            }

            const res = await axiosPublic.post('/task', taskInfo);

            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.taskname} is added`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        

    }

    return (
        <div>
            <h2 className="text-3xl my-4 text-center text-purple-600 font-bold">Add a Task</h2>

            <div className="bg-purple-400 p-4 rounded-lg ">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex gap-6">
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Name of the Task</span>

                            </label>
                            <input type="text" placeholder="Name of the task" {...register('taskname', { required: true })}
                                required
                                className="input input-bordered w-full " />

                        </div>
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Deadline</span>

                            </label>
                            <input type="date" placeholder="Available date" {...register('deadline', { required: true })}
                                required
                                className="input input-bordered w-full " />

                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Description</span>

                        </label>
                        <textarea {...register('description', { required: true })} required className="textarea textarea-bordered h-24" placeholder="Task Description"></textarea>

                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select {...register('priority', { required: true })} defaultValue='default' className="select select-accent w-full max-w-xs">
                            <option disabled value='default'>Select Task Priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            
                        </select>
                    </div>

                    <div className="text-center">
                        <button className="btn bg-purple-600 btn-outline text-white">
                            <FaPlus></FaPlus>
                            Add a Task
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddTask;