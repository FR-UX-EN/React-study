import { useRef } from 'react';

export default function Input({ onSave, onCancel }) {
    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave(event) {
        event.preventDefault();
        const newProject = {
            title: title.current.value,
            description: description.current.value,
            date: date.current.value,
            tasks: []
        }
        console.log(newProject);
        onSave(newProject);
    }

    function handleCancel(event) {
        event.preventDefault();
        onCancel();
    }

    return (
        <div className="w-[35rem] mt-16">

            <form onSubmit={handleSave}>
                <div className="flex items-center justify-end gap-4 my-4">
                    <button className="text-stone-600 hover:text-stone-950" onClick={handleCancel}>Cancel</button>
                    <input type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" value="Save" />
                </div>
                <div>
                    <label className="text-sm font-bold uppercase text-stone-500">title</label>
                    <input ref={title} type="text" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required></input>
                </div>
                <div>
                    <label className="text-sm font-bold uppercase text-stone-500">description</label>
                    <textarea ref={description} type="text" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required />
                </div>
                <div>
                    <label className="text-sm font-bold uppercase text-stone-500">Due date</label>
                    <input ref={date} type="date" pattern="\d{2}.\d{2}.\d{4}" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required />
                </div>
            </form>
        </div>

    );
}