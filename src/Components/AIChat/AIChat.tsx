import { MouseEvent } from 'react'

import './Styles/AIChatContainer.css'

function AIChat() {
    const ManageAiButtom = (event: MouseEvent) => {
        event.preventDefault();
        alert("Coming soon.");
    };

    return (
        <div className="chatContainer">
            <button className="buttom" onClick={ManageAiButtom}>
                <img className="image" src="../../../public/Images/Aichat.jpg" alt="aipicture" title="Ask our AI" />
            </button>
        </div>
    )
}

export default AIChat;