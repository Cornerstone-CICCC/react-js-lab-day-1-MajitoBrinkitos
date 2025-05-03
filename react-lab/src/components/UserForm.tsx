import styles from '../modules/UserForm.module.scss'
import { User } from '../types/User'

interface Props {
    formData: Omit<User, 'id'>;
    setFormData: React.Dispatch<React.SetStateAction<Omit<User, 'id'>>>;
    saveUser: () => void;
    clearForm: () => void;
}

const UserForm: React.FC<Props> = ({ formData, setFormData, saveUser, clearForm}) => {
    return (
        <form className={styles.form}>
            {/*Title */}
            <h1>Welcome</h1>
            <div className={styles.info}>
                {/*Full Name */}
                <label>
                    Fullname: <input type="text" value={formData.fullname} onChange={(e) => setFormData({
                        ...formData, fullname: e.target.value
                    })} placeholder='First Name, Last Name'/>
                </label>

                {/*Age */}
                <label>
                    Age: <input type="number" value={formData.age} onChange={(e) => setFormData({
                    ...formData, age: Number(e.target.value)
                    })} placeholder='0-99' />
                </label>
            </div>

            {/*Education */}
            <div className={styles.info}>
                <label> Education: </label>
                    <select value={formData.education} onChange={(e) => setFormData({
                    ...formData, education: e.target.value
                    }) } >
                    <option value="">Select Education</option>
                    <option value="College">College/University</option>
                    <option value="Diploma">Diploma/Certification</option>
                    <option value="High School">High School</option>
                    </select>
            </div>
                    

            {/*Gender */}
            <div className={styles.gender}>
                <label>Gender:</label>
                <input className={styles.inline} type="radio" name="gender" value="Male" onChange={(e) => setFormData({
                    ...formData, gender: e.target.value
                })} /> Male
                <input className={styles.inline} type="radio" name="gender" value="Feminine" onChange={(e) => setFormData({
                    ...formData, gender: e.target.value
                })} /> Feminine
            </div>
                
            {/*Skills */}
            <div className={styles.skills}>
                <h5 className={styles.title}>Skills</h5>
                {["HTML", "CSS", "JavaScript", "Astro", "PostgreSQL", "React"].map(skill => (
                    <label key={skill}>
                        <input type="checkbox" checked={formData.skills.includes(skill)} onChange={(e) => setFormData({...formData, skills: e.target.checked ? [...formData.skills, skill] : formData.skills.filter(s => s !== skill)}) 
                        }/>
                        {skill}
                    </label>
                ))}
            </div>

            {/*Bio */}
            <textarea value={formData.bio} onChange={(e) => setFormData({
                ...formData, bio: e.target.value
            })} placeholder="Bio">
            </textarea>

            <button type="button" onClick={saveUser}>Add/Save User</button>
            <button type="button" onClick={clearForm}>Clear</button>
        </form>
    );
}

export default UserForm;