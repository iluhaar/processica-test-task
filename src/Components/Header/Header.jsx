import React, {useContext, useState} from 'react'
import styles from './header.module.css'
import { useHistory } from 'react-router-dom'
import Modal from '../Modal/Modal'
import { NewChannel} from '..'
import ChatContext from '../../Context/ChatContext'


const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    const context = useContext(ChatContext)
    let history = useHistory();

    
    const handleLogoutClick = () => {
        context.logOut(null, null)
        history.push('/')
    }
    const handleProfileClick = () => {
        history.push('/profile')
    }
    const goBack = () => {
        history.goBack()
    }

    return (
        <div className={styles.container}>
            <div>
                <button onClick={() => setModalActive(true)}>Create channel</button>
            </div>
            <div className={styles.goMainButton}onClick={goBack}>
                <p>Go Back</p>
            </div>
            <div>
                <button onClick={handleProfileClick}>Profile</button>
                <button onClick={handleLogoutClick}>Logout</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <NewChannel />
            </Modal>
        </div>
    )
}

export default Header
