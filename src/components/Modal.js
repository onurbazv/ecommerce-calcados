import { useEffect } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({isOpen, close, child}) => {  
    useEffect(() =>{
        if (isOpen) {
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        isOpen ? ReactDOM.createPortal(
            <>
                <div className="fixed inset-0 grid place-items-center z-5">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-5" onClick={close}></div>
                    <div className="z-10">
                        {child}
                    </div>
                </div>
            </>, document.getElementById("portal")
        ) : null
    )
}

export default Modal