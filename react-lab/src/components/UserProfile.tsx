import { User } from '../types/User'

interface Props {
    selectedUser: User | null;
}

const UserProfile: React.FC<Props> = ({ selectedUser }) => {
    if (!selectedUser) return <p>Select a user to view details</p>;

    return (
        <div>
            <h2>{selectedUser.fullname}</h2>
            <p>Age: {selectedUser.age}</p>
            <p>Education: {selectedUser.education}</p>
            <p>Gender: {selectedUser.gender}</p>
            <p>Skills: {selectedUser.skills.join(", ")}</p>
            <p>Bio: {selectedUser.bio}</p>
        </div>
    )
}

export default UserProfile