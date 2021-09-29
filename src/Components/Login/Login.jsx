import React, { useContext, useEffect, useState } from 'react'
import ChatContext from '../../Context/ChatContext'
import { useHistory } from 'react-router-dom'
import styles from './login.module.css'


const Login = () => {

    let context = useContext(ChatContext)

    let history = useHistory();


    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let usersList = context.users

    const handleSubmit = (e) => {
        e.preventDefault()
        context.logIn(email, password)
        history.push('/main')
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)

    }

    useEffect(() => {

        setUser(usersList)
    }, [usersList, user])


    return (
        <div className={styles.container}>
            <div className={styles.formcontainer}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.loginform}>
                        <div className={styles.loginFormItem}>
                            <div>
                                <label htmlFor="text">Email:</label>
                                <input type="email" placeholder='Email input' required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.loginFormItem}>
                                <label htmlFor="text">Password:</label>
                                <input type="password" placeholder='password input' required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
