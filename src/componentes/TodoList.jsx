import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../assets/firebase/config2";
import { useEffect, useState } from "react";

export const TodoList = () => {
    const { register, handleSubmit, reset } = useForm();
    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState("all"); // Estado para filtrar tareas

    const getProducts = async () => {
        const ProductsCollection = await getDocs(collection(db, "Tareas"));
        const data = ProductsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTask(data);
    };

    const addProduct = async (data) => {
        await addDoc(collection(db, "Tareas"), { ...data, completed: false });
        reset();
        getProducts(); // Actualiza la lista después de agregar
    };

    const toggleComplete = async (taskId, currentStatus) => {
        const taskRef = doc(db, "Tareas", taskId);
        await updateDoc(taskRef, { completed: !currentStatus });
        getProducts(); // Actualiza la lista después de cambiar el estado
    };

    const deleteTask = async (taskId) => {
        const taskRef = doc(db, "Tareas", taskId);
        await deleteDoc(taskRef);
        getProducts(); // Actualiza la lista después de eliminar
    };

    const filterTasks = (status) => {
        setFilter(status);
    };

    const filteredTasks = task.filter(t => 
        filter === "completed" ? t.completed : 
        filter === "pending" ? !t.completed : 
        true // Muestra todas si el filtro es "all"
    );

    useEffect(() => {
        getProducts(); // Ejecutamos funciones al momento de montar un componente
    }, []);

    return (
        <div className="todo-container">
            <h1>TODO List</h1>
            <form onSubmit={handleSubmit(addProduct)} className="todo-form">
                <input type="text" placeholder="Add a new task" {...register('task')} required />
                <button type="submit">Add Task</button>
            </form>

            <div>
                <button className="header-button B3" onClick={() => filterTasks("all")}>All</button>
                <button className="header-button B3" onClick={() => filterTasks("completed")}>Completed</button>
                <button className="header-button B3 " onClick={() => filterTasks("pending")}>Pending</button>
            </div>

            <table className="todo-table">
              
                <tbody>
                    {filteredTasks.map((tasks) => (
                        <tr key={tasks.id} className={`task ${tasks.completed ? 'completed' : ''}`}>
                            <td className="task-name">{tasks.task}</td>
                            <td className="action-buttons">
                                <button onClick={() => toggleComplete(tasks.id, tasks.completed)}>
                                    {tasks.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button onClick={() => deleteTask(tasks.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};