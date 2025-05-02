import { useState } from 'react'
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import { User } from './types/User'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: ""
  });

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  {/*Save/Update user */}
  const saveUser = () => {
    if (formData.fullname.trim() === "") return;

    if (selectedUser){
      setUsers(prev => prev.map(user => user.id === selectedUser.id ? { ...selectedUser, ...formData } : user));
      setSelectedUser(null);
    } else {
      setUsers(prev => [...prev, { id: Date.now(), ...formData }]);
    }
    clearForm();
  };

  {/*Clear form */}
  const clearForm = () => setFormData({ fullname: "", age: 0, education: "", gender: "", skills: [], bio:"" });

  {/*Edit user */}
  const editUser = (id: number) => {
    const userToEdit = users.find(user => user.id === id);
    if (userToEdit){
      setFormData ({ ...userToEdit });
      setSelectedUser(userToEdit)
    }
  };

  {/*Delete user */}
  const deleteUser = (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  {/*View user */}
  const viewUser = (id: number) => {
    const userToView = users.find(user => user.id === id);
    setSelectedUser(userToView || null)
  }

  return (
    <>
      <UserForm formData={formData} setFormData={setFormData} saveUser={saveUser} clearForm={clearForm} />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} viewUser={viewUser}/>
      <UserProfile selectedUser={selectedUser} />
    </>
  );
};

export default App;
