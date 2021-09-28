import React from 'react'
import './modal.css'

const Modal = ({active, setActive, children}) => {
    const handleModalClick = () => {
        setActive(false)
    } 
    return (
        <div className={active ? "modal active" : "modal"} onClick={handleModalClick}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
            {children}
            </div>
        </div>
    )
}

export default Modal
