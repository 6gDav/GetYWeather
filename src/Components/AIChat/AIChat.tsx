import { MouseEvent } from 'react'

import './Styles/AIChatContainer.css'

import AiChat from '../../../public/Images/AIChat.png';


//!Ai chat is not functioning yet
function AIChat() {
    const ManageAiButtom = (event: MouseEvent) => {
        event.preventDefault();
        alert("Coming soon.");
    };

    return (
        <div className="chatContainer">
            <button className="buttom" onClick={ManageAiButtom}>
                <img className="image" src={AiChat} alt="aipicture" title="Ask our AI" />
            </button>
        </div>
    )
}

export default AIChat;