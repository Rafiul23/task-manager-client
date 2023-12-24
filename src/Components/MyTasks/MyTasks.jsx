import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const MyTasks = () => {
    const { user } = useAuth();
    const email = user.email;
    // const [tasks, setTasks] = useState([]);
    const axiosPublic = useAxiosPublic();

    // axiosPublic.get(`/tasks/${email}`)
    //     .then(res => setTasks(res.data))

    const {data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/tasks/${email}`);
            return res.data;
        }
    })    

    const todo = tasks.filter(task => task.status === 'todo');
    const ongoing = tasks.filter(task => task.status === 'ongoing');
    const finished = tasks.filter(task => task.status === 'finished');

    const handleMakeOngoing = _id =>{
        axiosPublic.put(`/ongoingtask/${_id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved to ongoing",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleMakeFinished = _id =>{
        axiosPublic.put(`/finishedtask/${_id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved to finished",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteTask = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/task/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Your task has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className="text-3xl my-4 text-center text-purple-600 font-bold">My Tasks</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-blue-400 h-screen w-full">
                    <h2 className="text-3xl my-4 text-center text-white font-bold">To Do</h2>

                    {
                        todo.map(task => <>
                            <div className="card card-compact w-3/4 mx-auto mt-3 bg-base-100">
                                
                                <div className="card-body">
                                    <h2 className="card-title">{task.task_name}</h2>
                                    <p>{task.task_description}</p>
                                    <p>Deadline: {task.deadline}</p>
                                    <p>Priority: {task.priority}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={()=> handleMakeOngoing(task._id)} className="btn btn-primary">Make Ongoing</button>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }

                </div>
                <div className="bg-yellow-400 h-screen w-full">
                    <h2 className="text-3xl my-4 text-center text-white font-bold">On Going</h2>
                    {
                        ongoing.map(task => <>
                            <div className="card card-compact w-3/4 mx-auto mt-3 bg-base-100">
                                
                                <div className="card-body">
                                    <h2 className="card-title">{task.task_name}</h2>
                                    <p>{task.task_description}</p>
                                    <p>Deadline: {task.deadline}</p>
                                    <p>Priority: {task.priority}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={()=> handleMakeFinished(task._id)} className="btn btn-primary">Make finished</button>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
                <div className="bg-green-400 h-screen w-full">
                    <h2 className="text-3xl my-4 text-center text-white font-bold">Finished</h2>
                    {
                        finished.map(task => <>
                            <div className="card card-compact w-3/4 mx-auto mt-3 bg-base-100">
                                
                                <div className="card-body">
                                    <h2 className="card-title">{task.task_name}</h2>
                                    <p>{task.task_description}</p>
                                    <p>Deadline: {task.deadline}</p>
                                    <p>Priority: {task.priority}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={()=> handleDeleteTask(task._id)} className="btn text-red-500">
                                            <FaTrash></FaTrash>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTasks;