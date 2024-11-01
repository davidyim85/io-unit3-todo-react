import { getAllTodos } from '../services/todoService';
import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, editTodo } from '../services/todoService';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const data = await getAllTodos();
        setTodos(data)
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = {
            text: formData.get('text'),
            isComplete: formData.get('isComplete') === 'on',
            duration: Number(formData.get('duration')),
        }
        console.log(data)


        //todo: i need to call the todo servce to add a todo
        await addTodo(data);

        //reset the form
        e.target.reset();

        //fetch all Todos again
        fetchTodos();
    }


    const handleDelete = async (id) => {
        //delete the todo
        await deleteTodo(id);
        fetchTodos();
    }

    const handleEdit = async (e, id) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = {
            text: formData.get('text'),
            isComplete: formData.get('isComplete') === 'on',
            duration: Number(formData.get('duration')),
        }
        console.log(data)

        //todo: i need a call to edit
        await editTodo(id, data)

        //reset the form
        e.target.reset();

        //fetch all Todos again
        fetchTodos();
    }

    useEffect(() => {
        fetchTodos()
    }, [])


    return (
        <main>
            <section>
                <h1>Todos</h1>
                {todos.map((v, i) => {
                    return (
                        <form key={i} onSubmit={(e) => handleEdit(e, v._id)}>
                            <label htmlFor="text">Todo:</label>
                            <input
                                type="text"
                                defaultValue={v.text}
                                name="text"
                            />

                            <label htmlFor="isComplete">Is Complete:</label>
                            <input
                                type="checkbox"
                                defaultChecked={v.isComplete}
                                name="isComplete"
                            />

                            <label htmlFor="duration">Duration:</label>
                            <input
                                type="number"
                                defaultValue={v.duration}
                                name="duration"
                            />

                            <button type="submit">Save</button>
                            <button type="button" onClick={() => handleDelete(v._id)} >
                                Delete
                            </button>
                        </form>
                    )
                })}
            </section>

            <section>
                <h2>Add New Todos</h2>

                <form onSubmit={handleAdd}>
                    <label htmlFor="text">Todo:</label>
                    <input
                        type="text"
                        defaultValue={""}
                        name="text"
                    />

                    <label htmlFor="isComplete">Is Complete:</label>
                    <input
                        type="checkbox"
                        defaultChecked={false}
                        name="isComplete"
                    />

                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="number"
                        defaultValue={0}
                        name="duration"
                    />

                    <button type="submit">Add New</button>

                </form>
            </section>


        </main>
    )
}

export default Todo;