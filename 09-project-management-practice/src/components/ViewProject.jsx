import { useState, useRef } from 'react';

export default function ViewProject({ project, onDeleteProject }) {
    const [tasks, setTasks] = useState(project.tasks);
    const task = useRef();
    const li = useRef();

    function formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const parsedDate = new Date(date + 'T00:00:00');
        return parsedDate.toLocaleDateString(undefined, options);
    }

    function handleAddTask() {
        if (!task.current.value) return;
        const newValue = task.current.value;

        setTasks((prevTasks) => {
            return [...prevTasks, newValue];;
        });

        task.current.value = '';
        project.tasks.push(newValue);
    }

    function handleDeleteTask(indexToDelete) {
        setTasks((prevTasks) => {
            return prevTasks.filter((_, index) => index !== indexToDelete);
        })
    }

    function handleDeleteProject() {
        onDeleteProject();
    }

    return (
        <div className="w-[35rem] mt-16">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button onClick={handleDeleteProject}>Delete</button>
            </div>
            <p className="text-stone-400 mb-4"> {formatDate(project.date)}</p>
            <p className="flex flex-col gap-1 my-4">{project.description}</p>

            <hr />

            <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>
            <div>
                <div>
                    <input ref={task} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
                    <button className="mx-4" onClick={handleAddTask}>Add Task</button>
                </div>

                {tasks.length > 0 ? <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task, index) => {
                        return (
                            <li key={index} ref={li} className="flex justify-between my-4">
                                <p>{task}</p>
                                <button className="text-stone-700 hover:text-red-500" onClick={() => handleDeleteTask(index)}>Clear</button>
                            </li>
                        );
                    })}
                </ul> : undefined}
            </div>
        </div>
    )
}