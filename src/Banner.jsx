import { useState } from "react";
import Modal from 'react-modal'
function Information() {

    const [isOpen, setIsOpen] = useState(true)
    const customStyles = {
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
        content: {
            top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%',
            transform: 'translate(-50%, -50%)', color: 'rgba(121, 110, 116, 1)',
            display: 'flex', 'flex-direction': 'column', 'align-items': 'center',
            padding: '20px'
        },
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >

                <h1 style={{ marginBottom: '1rem', color: 'black', fontWeight: 'bold', fontSize: '45px' }}>
                    Important Information
                </h1>
                <p style={{ color: 'black', marginBottom: '1rem', }}>
                    This Site is hosted by ALHU Media and NOT by Dilara herself.<br/>
                    It is ment to be a Demo for her.
                </p>
                <button
                    style={{
                        left: '50%', color: 'black', fontWeight: 'bold', backgroundColor: 'rgba(0, 144, 39, 0.8)',
                        padding: '15px', borderRadius: '15px'
                    }}
                    onClick={() => setIsOpen(false)}>
                    I understand
                </button>
            </Modal>
        </>
    );
}

export default Information;