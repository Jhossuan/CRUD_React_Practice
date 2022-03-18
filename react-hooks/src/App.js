import React,{useState} from 'react'
import AddUserForm from './AddUserForm';
import UserTable from './tables/userTable'
import EditUserForm from './forms/EditUserForm';

const App = () => {
  //Datos iniciales de nuestro CRUD, podemos eliminar los objetos si queremos :)
  //Osea, que puede ser un array vacio, los objetos que estan comentados eran para mostrar datos iniciales.
  const usersData = [
    {id: 1, name: 'Jhossuan', username: 'Jhossuaxd'},
    {id: 2, name: 'Kuniverus', username: 'Pinocho'},
    {id: 3, name: 'Trevor', username: 'Galactus'}
  ]

  const initialFormState = {id:null, name: '', username: ''}

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser= (id) => {
    setUsers(users.filter((user) => user.id !== id))
    setEditing(false);
  }

  const editRow = (user) =>{
    setEditing(true);//habilitamos la funcion de editar el usuario.
    setCurrentUser({id: user.id, name:user.name, username:user.username});//Para pasar los valores del usuario seleccionado al input
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);//Para ocultar los botones de editar y cancelar cuando hayamos editado el usuario.
    setUsers(users.map((user)=>(user.id === id ? updateUser : user)))//Permite que si haya la actualización de los datos.
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ):(
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )}

export default App
