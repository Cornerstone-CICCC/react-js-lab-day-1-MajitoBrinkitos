import { Props } from '../types/Props'

const UserList: React.FC<Props> = ({ users, editUser, deleteUser, viewUser}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Id</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.fullname}</td>
                        <td>{user.id}</td>
                        <td>
                            <button onClick={() => viewUser(user.id)}>View</button>
                            <button onClick={() => editUser(user.id)}>Edit</button>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserList