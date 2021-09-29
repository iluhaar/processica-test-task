import React from 'react'
import styles from './ChatPage.module.css'


const LMessage = ({message}) => {
    return (
        <div align='right'>
            <div align='left' className={styles.message}>{message}</div>
        </div>
    )
}

export default LMessage
