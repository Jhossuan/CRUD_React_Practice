import React,{ useState } from 'react';

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target;//Va a ser igual a lo que yo escriba en el input.
        setUser({...user, [name]: value})//Hacemos una copia del usuario existente y a name le daremos el valor del e.target.
    }

    return(
        <form
        onSubmit={event => {
            event.preventDefault()
            if(!user.name || !user.username)return;//Validación, los dos inputs tienen que contener texto, o sino, no funcionara.

            props.addUser(user)//Ejecuta la funcion addUser y añade el usuario creado.
            setUser(initialFormState)//Cada que se envie el formulario, los inputs volveran a su estado inicial.
        }}
        >
            <label>Name</label>
            <input type="text" 
                name="name" 
                value={user.name}//Su valor sera el que venga en user del estado inicial
                onChange={handleInputChange}//Ejecuta la función creada
            />
            <label>Username</label>
            <input type="text" 
                name="username" 
                value={user.username}//Su valor sera el que venga en username del estado inicial
                onChange={handleInputChange}//Ejecuta la función creada
            />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm;