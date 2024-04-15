import React from 'react';

const ChatContext = React.createContext();

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <ChatContext.Provider value={{ messages, inputValue, handleSendMessage, handleInputChange }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatProvider, ChatContext };