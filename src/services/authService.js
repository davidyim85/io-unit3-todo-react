const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;


export const signup = async (d) => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signup`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(d)
        });
        const json = await res.json();

        localStorage.setItem('token', json.token)
        return json;
    } catch (err) {
        throw new Error(err)
    }
}


export const getUser = () => {
    const token = localStorage.getItem('token')

    if(!token) return null;
    return token;
}


export const signin = async (formData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signin`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const json = await res.json();

        localStorage.setItem('token', json.token)
        return json;
    } catch (err) {
        throw new Error(err)
    }

}

export const signOut = () => {
    localStorage.removeItem('token');
}