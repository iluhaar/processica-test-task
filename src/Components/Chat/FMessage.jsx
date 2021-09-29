import React from 'react'
import styles from './ChatPage.module.css'

const FMessage = ({ message }) => {
    return (
        <div align='left'>
            <div align='left' className={styles.message}>{message}</div>
        </div>
    )
}

export default FMessage
