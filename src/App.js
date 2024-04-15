import './App.css'
import AppContainer from "./Components/AppContainer";
import { ChatProvider } from './Components/ChatContext';

function App() {
  return (
    <>
    <ChatProvider>
      <AppContainer/>
    </ChatProvider>
    </>
  );
}

export default App;
