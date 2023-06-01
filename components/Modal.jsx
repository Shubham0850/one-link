import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal(props) {
    if (process.browser){
        const Backdrop = props => {
            return <div className="backdrop" onClick={props.onClose}></div>
        }
        
        const ModalOverlay = props => {
            return (
                <div className="modal">
                    <div>{props.children}</div>
                </div>
            )
        }
        const portalElement = document.getElementById('overlays');
        return (
            <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            </>)
    }
    else{
        return <></>
    }
}
