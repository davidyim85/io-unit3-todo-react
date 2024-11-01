const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;


export const getAllTodos = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}/todo`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        const json = await res.json();
        return json;
    } catch (err) {
        throw new Error(err)
    }
}


export const addTodo = async (formData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/todo`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        return res.json()
    } catch (err) {
        throw new Error(err)
    }
}


export const deleteTodo = async (id) => {
    try {
        const res = await fetch(`${BACKEND_URL}/todo/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        return res.json()
    } catch (err) {
        throw new Error(err)
    }
}

export const editTodo = async (id, formData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/todo/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        return res.json()
    } catch (err) {
        throw new Error(err)
    }
}