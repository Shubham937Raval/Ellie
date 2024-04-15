    import React, { useContext } from 'react'
    import { ChatContext, ChatProvider } from './ChatContext';

    const Home = () => {
        const { messages, inputValue, handleSendMessage, handleInputChange } = useContext(ChatContext);

    return (
        <ChatProvider>
        <div className='container'>
            <h1>Home</h1>
            <input
            className='input-field'
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Type a message..."
            />
            <button className='send-button' onClick={() => handleSendMessage(inputValue)}>Send</button>
            <ul className='message-list'>
            {messages.map((message, key) => (
                <li className='message-item' key={key}>{message}</li>
            ))}
            </ul>
        </div>
        </ChatProvider>
    );
    };

    export default Home;

