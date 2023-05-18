import { useState } from 'react'
import styles from '../../styles/Login.module.css'
import axios from "axios"
import { useRouter } from 'next/router'

const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    const router = useRouter()
    let isAuth = "isAuth"

    const handleClick = async ()=> {
        try{
            await axios.post("http://localhost:3001/api/login", {username, password})
            localStorage.setItem('isAuth', JSON.stringify('YES'))
            router.push("../.")
        }catch(err){
            setError(true)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>User Login</h1>
                <input
                    placeholder="Username"
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="Password"
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick} className={styles.button}>
                    Sign In
                </button>
                {error && <span className={styles.error}>Wrong Credentials!</span>}
            </div>
        </div>
    )
} 

export default Login