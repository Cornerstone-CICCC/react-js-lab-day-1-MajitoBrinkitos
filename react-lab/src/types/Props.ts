import { User } from './User'

export interface Props {
    users: User[];
    editUser: (id: number) => void;
    deleteUser: (id: number) => void;
    viewUser: (id: number) => void;
}
